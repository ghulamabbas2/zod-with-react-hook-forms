import { registerSchema } from "@/utils/zod-schemas";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const result = registerSchema.safeParse(body);

  if (!result.success) {
    let errors = {};

    result.error.issues.forEach((issue) => {
      errors = { ...errors, [issue.path[0]]: issue.message };
    });

    return NextResponse.json({ errors }, { status: 400 });
  }

  return Response.json({ created: true });
}
