import { z } from "zod";

const MAX_MB = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const ProfileSchema = z.object({
    nip: z.string().min(1, { message: "NIP is required" }),
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(1, { message: "Password is required" }),
    profile_picture: z
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

  export enum RoleType {
    User = "user",
    Admin ="admin"
  }
  
  export type ProfileType = z.infer<typeof ProfileSchema>;

  export interface TUser {
    nip: string;
    name: string;
    email: string;
    password: string;
    profile_picture: string;
  }