import { z } from "zod";

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const ProfileSchema = z.object({
    nik: z.string().min(1, { message: "NIK is required" }),
    fullname: z.string().min(1, { message: "Full name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    position: z.string().min(11, { message: "position minimum length is 8" }),
    working_hour: z.string().min(6, { message: "Working hour Number is required" }),
    location: z.string().min(6, { message: "location is required" }),
    avatar: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || file.size <= MAX_UPLOAD_SIZE,
        "Max image size is ${MAX_MB}MB"
      )
      .refine(
        (file) =>
          !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, and .png formats are supported"
      ),
  });
  
  export type ProfileType = z.infer<typeof ProfileSchema>;

  export interface TUser {
    nik: string;
    fullname: string;
    email: string;
    position: string;
    password: string;
    working_hour: string;
    location: string;
    avatar: string;
  }