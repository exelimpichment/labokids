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
    user: 'store.ciuchy@gmail.com',
    pass: 'qksphbmoulsjsqsf',
  },
};

export const handleEmailFire = async (data: Payload) => {
  const transporter = nodemailer.createTransport({
    ...smtpConfig,
  });

  return await transporter.sendMail({
    from: 'labokids@gmail.com',
    ...data,
  });
};
