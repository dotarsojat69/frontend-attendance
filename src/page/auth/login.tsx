import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginType } from "@/utils/apis/auth/types";
import AuthLayout from "@/components/authLayout";

const login = () => {
    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });

      function onSubmit(values: z.infer<typeof loginSchema>) {
        
        console.log(values)
      }

  return (
    <AuthLayout>
    <div className="min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="mb-4">
            <h1 className="text-2xl font-bold text-center mb-4 mt-4">Login</h1>
            <p className="text-center text-gray-600">log in to take attendance</p>
        </div>
      <Card className="w-full max-w-md p-4 bg-[#FAD662] rounded-3xl">
        <CardContent>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                placeholder="Enter your email"
                className="rounded-3xl"
                {...field} />
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
                <Input
                placeholder="Enter your password"
                className="rounded-3xl"
                {...field} />
              </FormControl>
            </FormItem>
        )}
        />
      </form>
    </Form>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
          type="submit"
          className="bg-[#BE4747] text-white p-3 rounded-2xl w-1/5">
            Login
          </Button>
        </CardFooter>
      </Card>
          <div className="grid justify-start text-center mt-2">
            <a href="/register" className="text-[#BE4747] underline text-bold">Register</a>
          </div>
    </div>
    </AuthLayout>
  );
};

export default login
