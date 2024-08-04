import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  nik: z.string().min(16, { message: "NIK is required" }),
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  position: z
    .string()
    .min(11, { message: "position is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  working_hour: z.string().min(6, { message: "Working hour is required" }),
  location: z.string().min(6, { message: "location is required" }),
});

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;