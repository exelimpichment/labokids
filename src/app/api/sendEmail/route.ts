import { render } from '@react-email/render';
import { handleEmailFire } from '@/lib/email-helper';
import { NextResponse } from 'next/server';
import ContactFormEmail from '@/lib/emailTemplates/contactFormEmail';
import { formSchema } from '@/lib/types';

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const result = formSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  if (result.success) {
    const { email, message, phone } = result.data;

    await handleEmailFire({
      to: 'oldestspy@gmail.com', // to: 'info@labokids.pl',
      subject: 'Nowy potencjalny klient!',
      html: render(ContactFormEmail({ phone, email, message })),
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
