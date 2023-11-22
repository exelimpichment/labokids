import { formSchema } from '@/lib/types';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: unknown = await request.json();
  console.log(body);

  const result = formSchema.safeParse(body);
  console.log(result);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }
  console.log(zodErrors);

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
