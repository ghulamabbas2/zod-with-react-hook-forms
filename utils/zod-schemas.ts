import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Please enter name" })
      .min(3, "Name must be at least 3 characters"),
    email: z
      .string({ required_error: "Please enter email" })
      .email("Please enter a valid email"),
    password: z
      .string({ required_error: "Please enter password" })
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string({
      required_error: "Please enter confirm password",
    }),
    phoneNo: z
      .string({ required_error: "Please enter phone number" })
      .refine(
        (value) => /^\d{10}$/.test(value),
        "Please enter a valid phone number"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof registerSchema>;
export type SignUpFields = keyof SignUpSchema;
