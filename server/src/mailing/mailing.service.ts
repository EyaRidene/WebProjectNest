import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailingService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string) {
    await this.mailerService.sendMail({
      from: 'eya.ridene21@gmail.com',
      to: email,
      subject: 'Welcome to Our NESTa7fedh App!',
      text: 'Thank you for signing up. Welcome to our application!',
    });
  }
}
