import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, RegisterType } from "@/utils/apis/auth/types";
import AuthLayout from "@/components/authLayout";

const register = () => {
    const form = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          nik: "",
          fullname: "",
          email: "",
          position: "",
          working_hour: "",
          location: "",
          password: "",
        },
      });

      function onSubmit(values: z.infer<typeof registerSchema>) {
        
        console.log(values)
      }

  return (
    <AuthLayout>
    <div className="min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="mb-4">
            <h1 className="text-2xl font-bold text-center mb-4 mt-4">Register</h1>
            <p className="text-center text-gray-600">Enrol Employees</p>
        </div>
      <Card className="w-full max-w-md p-4 bg-[#FAD662] rounded-3xl">
        <CardContent>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIK</FormLabel>
              <FormControl>
                <Input placeholder="Enter your NIK" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                type="email"
                placeholder="Enter your email" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Enter your position" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="working_hour"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Hour</FormLabel>
              <FormControl>
                <Input placeholder="Enter your working hour" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your location" {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
            </FormItem>
        )}
        />
      </form>
    </Form>
        </CardContent>
        <CardFooter className="justify-end">
          <Button className="bg-[#BE4747] text-white p-3 rounded-2xl w-1/4">Register</Button>
        </CardFooter>
      </Card>
          <div className="grid justify-start text-center mt-2">
            <a href="/login" className="text-[#BE4747] underline text-bold">Login</a>
          </div>
    </div>
    </AuthLayout>
  );
};

export default register
