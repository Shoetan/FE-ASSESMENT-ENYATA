import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email address' })
    .regex(
      /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|io|)$/i,
      { message: 'Email must end with a valid domain extension' }
    ),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, { 
      message: 'Password must contain both letters and numbers' 
    })
});

export type LoginSchema = z.infer<typeof loginSchema>;
