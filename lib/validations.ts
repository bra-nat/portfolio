import * as z from "zod";

export const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: "This field is required",
    })
    .max(80),
  phone: z.string().min(9, { message: "This field is required" }).max(15),
  email: z
    .string()
    .email({ message: "THE E-MAIL ADDRESS ENTERED IS INVALID." }),
  subject: z.string(),
  message: z.string().min(5, { message: "This is a required field" }),
});
