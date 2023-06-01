import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./database/database.module";
import { ConfigModule } from '@nestjs/config';
import {UserModule} from "./user/user.module";
import {ProductModule} from "./product/product.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import *  as path from "path";
import {FileModule} from "./file/file.module";
import {CategoryModule} from "./category/category.module";
import {AuthModule} from "./auth/auth.module";
import {CartModule} from "./cart/cart.module";
import {CartProductModule} from "./cart-product/cart-product.module";
import {OrderModule} from "./order/order.module";
import {CommentModule} from "./comment/comment.module";
import { MailingModule } from './mailing/mailing.module';
import {MailerModule} from "@nestjs-modules/mailer";


@Module({
  imports: [
      DatabaseModule,
      UserModule,
      ProductModule,
      CategoryModule,
      AuthModule,
      FileModule,
      CartModule,
      CartProductModule,
      OrderModule,
      CommentModule,
      ConfigModule.forRoot(),
      ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static'),
      }),
      MailerModule.forRoot({
          transport: {
              host: 'eya.ridene21@gmail.com',
              port: 465,
              secure: true,
              auth: {
                  user: 'Eya Ridene',
                  pass: 'eya211101',
              },
          },
      }),
  ],
  controllers: [
      AppController,
  ],

  providers: [
      AppService,
  ],
})
export class AppModule {}
