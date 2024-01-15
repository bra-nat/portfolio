"use client";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/validations";
import { useState } from "react";
import { createForm } from "@/lib/actions/ContactFrom.action";
import { useRouter } from "next/navigation";

const Contact = () => {
const [isSubmitting, setIsSubmitting] = useState(false);
const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
       await createForm({
        name: values.fullname,
        phone: values.phone,
        email: values.email,
        subject: values.subject,
        message: values.message
       });

       router.push("/");
    } catch (error) {
        
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section className="max-container flex w-full px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 font-montserrat">
        <h1 className="text-primary mb-2 text-sm font-normal uppercase tracking-wide">
          Contact
        </h1>
        <h2 className="mb-12 text-6xl font-bold leading-10 text-slate-800 max-xl:text-4xl max-lg:leading-6">
          Get in Touch.
        </h2>
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="bg-psecondary flex w-full flex-col justify-start gap-6 p-8 lg:max-w-md">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/contact-me.webp"
                alt="image for contact us section"
                width={600}
                height={400}
                className="rounded-lg transition-transform duration-300 ease-linear hover:scale-110"
              />
            </div>
            <h2 className="text-3xl font-bold">Nathaniel Aidoo</h2>
            <p className="font-montserrat text-sm font-normal">
              Front-end Engineer
            </p>
            <p className=" text-lg font-normal">
              I am available for freelance work, Part-time, Full-Time. Connect
              with me and let&apos;s build amazing projects together.
            </p>
            <div className="">
              <p>
                Phone:
                <Link href={"/"} className="group ml-2 inline-block">
                  <span className="hover:text-primary transition-colors duration-300 ease-linear">
                    +233 240701457
                  </span>
                  <div className="mt-[-2px] h-[1px] w-0 transition-all duration-300 ease-linear group-hover:w-full group-hover:bg-[#fe0302]"></div>
                </Link>
              </p>
              <p>
                Email:
                <Link href={"/"} className="group ml-2 inline-block">
                  <span className="hover:text-primary transition-colors duration-300 ease-linear">
                    admin@nathanielaidoo.com
                  </span>
                  <div className="mt-[-2px] h-[1px] w-0 transition-all duration-300 ease-linear group-hover:w-full group-hover:bg-[#fe0302]"></div>
                </Link>
              </p>
            </div>
            <p className="text-base uppercase">Find me</p>
            <div className="flex gap-4 ">
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/xa.svg"
                  alt="Twitter Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/linkedin-a.svg"
                  alt="LinkedIn Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
              <div className="bg-p_primary group flex items-center justify-center p-4">
                <Image
                  src="/assets/icons/github.svg"
                  alt="GitHub Logo"
                  width={20}
                  height={20}
                  className="group-hover:text-white-svg"
                />
              </div>
            </div>
          </div>
          <div className="bg-psecondary flex w-full flex-col gap-5 p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8">
                <div className="flex w-full flex-col gap-5 lg:flex-row">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem className="w-full ">
                        <FormLabel className="font-montserrat text-xs font-medium uppercase text-[#3c3e41]">
                          Full Name <span className="text-primary font-montserrat text-xs font-medium">*</span>
                        </FormLabel>
                        <FormControl >
                          <Input {...field} className="min-h-[56px] "/>
                        </FormControl>
                        <FormMessage className="text-primary font-montserrat text-xs font-medium uppercase" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel className="font-montserrat text-xs font-medium uppercase text-[#3c3e41]">
                          Phone Number <span className="text-primary font-montserrat text-xs font-medium">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="min-h-[56px]" />
                        </FormControl>
                        <FormMessage className="text-primary font-montserrat text-xs font-medium uppercase" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat text-xs font-medium uppercase text-[#3c3e41]">
                        Email <span className="text-primary font-montserrat text-xs font-medium">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="min-h-[56px]" />
                      </FormControl>
                      <FormMessage className="text-primary font-montserrat text-xs font-medium uppercase" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat text-xs font-medium uppercase text-[#3c3e41]">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="min-h-[56px]" />
                      </FormControl>
                      <FormMessage className="text-primary font-montserrat text-xs font-medium uppercase" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat text-xs font-medium uppercase text-[#3c3e41]">
                        Your Message <span className="text-primary font-montserrat text-xs font-medium">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} className="min-h-[256px]" />
                      </FormControl>
                      <FormMessage className="text-primary font-montserrat text-xs font-medium uppercase" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-p_primary min-h-[56px] w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
