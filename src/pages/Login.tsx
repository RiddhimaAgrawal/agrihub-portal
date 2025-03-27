
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const formSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("Login attempt:", values);
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find matching user
    const user = users.find(
      (u: any) => u.phone === values.phone && u.password === values.password
    );
    
    if (user) {
      // Store logged in status
      localStorage.setItem("currentUser", JSON.stringify({
        name: user.name,
        phone: user.phone,
        isLoggedIn: true
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome back to AgriHub!",
      });
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid phone number or password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex justify-center">
          <Logo className="w-40" />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-agrihub-darkGreen">
          Log in to your account
        </h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your phone number" 
                      type="tel" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
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
                    <div className="relative">
                      <Input
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-agrihub-green hover:bg-agrihub-darkGreen">
              Log In
            </Button>
          </form>
        </Form>
        
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-agrihub-green hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
