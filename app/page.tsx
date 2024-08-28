"use client";
import { useEffect, useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { StarIcon, HashIcon, MenuIcon, XIcon } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "500", "400", "100"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});

const links = ["Services", "Pricing", "About Us", "Contact Us"];

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});

export default function Home() {
  //   useEffect(() => {
  //     return () => {
  //       document.title = "Lonely Tab";
  //     };
  //   }, []);

  const rateCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });
  const [showMenuBar, setShowMenuBar] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    // <main className="bg-[url(/Good_bg.webp)] bg-[length:500px_auto]  bg-repeat w-screen h-screen"></main>
    <main className={montserrat.className}>
      <Toaster />
      <header className="bg-white">
        <div className="persoContainer flex justify-between items-center py-2">
          <p
            className={`text-md md:text-lg flex justify-end font-medium ${montserrat.className}`}
          >
            Tamasa Consulting
            <span className=" block w-2 h-2 self-center rounded-full bg-blue-600 mx-3 "></span>
          </p>
          <ul className="md:flex gap-6 hidden">
            {links.map((link) => (
              <li
                key={link}
                className="text-md font-medium py-3 px-2 border-2 border-transparent transition-all duration-300 hover:border-b-blue-600"
              >
                {link}
              </li>
            ))}
          </ul>
          <MenuIcon
            className="size-7 text-blue-500 md:hidden block"
            onClick={() => setShowMenuBar(true)}
          />
          <Button variant={"default"} className="bg-blue-600 px-5">
            Get Started
          </Button>
        </div>
      </header>
      <div
        className={`bg-white fixed top-0  w-[300px] h-full z-50 flex justify-center transition-all duration-700 items-center ${
          showMenuBar ? "right-0" : "right-[-300px]"
        }`}
      >
        <XIcon
          className="size-7 text-blue-500 md:hidden block absolute right-2 top-2"
          onClick={() => setShowMenuBar(false)}
        />
        <div className="flex flex-col gap-6 p-6">
          {links.map((link) => (
            <p
              key={link}
              className="text-lg font-medium py-3 px-2 border-2 border-transparent transition-all duration-300 hover:border-b-blue-600"
            >
              {link}
            </p>
          ))}
          <Button variant={"default"} className="bg-blue-600 px-5">
            Get Started
          </Button>
        </div>
      </div>

      <section className=" relative bg-slate-300/35 py-12 before:bg-[url(/Good_bg.webp)] before:bg-[length:500px_auto] before:bg-repeat before:w-full before:h-full before:block">
        <div className="persoContainer flex flex-col md:flex-row justify-between items-center py-2">
          <div className="p-3 w-full  md:w-3/5 flex flex-col gap-4">
            <p className="border border-transparent ps-2 border-l-black flex items-center text-black font-medium">
              <HashIcon className="size-4" />
              &nbsp;{HeadingArray[0]}
            </p>
            <div className="overflow-hidden">
              <motion.h1
                transition={{ duration: 0.5 }}
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                className="text-5xl font-bold leading-tight"
              >
                Driving sustainable agricultural solutions
                <br /> across Kenya
              </motion.h1>
            </div>
            <p className="text-lg">
              Welcome to Tamasa Consulting, the premier agricultural consulting
              firm in Kenya. We offer innovative solutions and practical support
              to help farmers achieve sustainable growth and financial
              stability.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <div className="flex mb-2">
                  {starNumbers.map((star) => (
                    <StarIcon
                      key={star}
                      strokeWidth="0"
                      className="size-4 fill-amber-500"
                    />
                  ))}
                </div>
                <div className="text-lg ">
                  <span className="text-4xl font-bold">4.8</span>/5.0
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/businessman.png"
                  alt="Good bg"
                  width={1000}
                  height={1000}
                  className="size-20 rounded-full"
                />
                <div>
                  <p className="text-3xl font-semibold">24K</p>
                  <p className="text-md">Happy customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="!ring-blue-600 "
                          placeholder="Ex: Ethan Parker"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="!ring-blue-600 "
                          placeholder="Ex: yourmail@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="!ring-blue-600 "
                          placeholder="Ex: +1 123 456 7890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 !mt-5 !py-5"
                >
                  Get Started
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="persoContainer flex flex-col md:flex-row gap-8">
          <Image
            src="/champs.png"
            alt="Doing business"
            width={1000}
            height={1000}
            className="size-[300px] md:size-[500px] rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold">About us</h3>
            <motion.h2
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold my-3"
            >
              Empowering farmers for a brighter future
            </motion.h2>
            <div className="my-4 space-y-3">
              {providedSolutions.map((solution) => (
                <div className="flex flex-col gap-1" key={solution.id}>
                  <p className="text-lg">{solution.name}</p>
                  <div className="w-full h-2 bg-slate-100 rounded-lg overflow-hidden">
                    <motion.div
                      className={`h-full bg-blue-600`}
                      initial={{ width: 0 }}
                      transition={{ duration: 1 }}
                      animate={{ width: `${solution.percentage}%` }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const HeadingArray = ["Digital marketing Agency"];
const starNumbers = [0, 1, 2, 3, 4];
const providedSolutions = [
  {
    id: 0,
    name: "Innovative solutions",
    percentage: 83,
  },
  {
    id: 1,
    name: "Practical support",
    percentage: 95,
  },
  {
    id: 2,
    name: "Sustainable growth",
    percentage: 75,
  },
  {
    id: 3,
    name: "Financial stability",
    percentage: 90,
  },
];
