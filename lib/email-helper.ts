import 'server-only';
import nodemailer from 'nodemailer';

type Payload = {
  to: string;
  subject: string;
  html: string;
};

const smtpConfig = {
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.GMAIL_LABOKIDS_EMAIL,
    pass: process.env.GMAIL_LABOKIDS_PASSWORD,
  },
};

export const handleEmailFire = async (data: Payload) => {
  const transporter = nodemailer.createTransport({
    ...smtpConfig,
  });

  return await transporter.sendMail({
    from: process.env.GMAIL_LABOKIDS_EMAIL,
    ...data,
  });
};
