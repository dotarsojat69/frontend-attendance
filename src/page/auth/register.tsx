import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/authLayout";
import { registerSchema, RegisterType } from "@/utils/apis/auth/types";
import { userRegister } from "@/utils/apis/auth/api";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const register = () => {
  const navigate = useNavigate();
  
    const form = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          nip: "",
          name: "",
          email: "",
          password: "",
        },
      });

      const onSubmit = async (data: RegisterType) => {
        try {
          const result = await userRegister(data);
          toast({
            description: result.message,
          });
          navigate("/login");
        } catch (error) {
          toast({
            title: "Oops! Something went wrong.",
            description: (error as Error).message,
            variant: "destructive",
          });
        }
      };

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
          name="nip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIP</FormLabel>
              <FormControl>
                <Input
                placeholder="Enter your NIK"
                className="rounded-3xl"
                {...field} />
              </FormControl>
            </FormItem> 
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                placeholder="Enter your name"
                className="rounded-3xl"
                {...field} />
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
                type="password"
                placeholder="Enter your password"
                className="rounded-3xl"                
                {...field} />
              </FormControl>
            </FormItem>
        )}
        />
        <CardFooter className="justify-end">
          <Button 
          type="submit"
          disabled={form.formState.isSubmitting}
          aria-disabled={form.formState.isSubmitting}
          className="bg-[#BE4747] text-white p-3 rounded-2xl w-1/4">
            Register
          </Button>
        </CardFooter>
      </form>
    </Form>
    </CardContent>
    </Card>
          <div className="grid justify-start text-center mt-2">
            <a href="/login" className="text-[#BE4747] underline text-bold">Login</a>
          </div>
    </div>
    </AuthLayout>
  );
};

export default register
