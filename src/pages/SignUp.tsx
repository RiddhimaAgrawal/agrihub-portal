
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

const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("Form values:", values);
    
    // Store user data in localStorage for this demo
    // In a real app, you would send this data to a server
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if user already exists
    const userExists = users.some((user: any) => user.phone === values.phone);
    if (userExists) {
      toast({
        title: "Registration failed",
        description: "A user with this phone number already exists",
        variant: "destructive",
      });
      return;
    }
    
    // Add new user
    const newUser = {
      name: values.name,
      phone: values.phone,
      password: values.password, // In a real app, you would hash this password
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    toast({
      title: "Registration successful",
      description: "Your account has been created. Please log in.",
    });
    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex justify-center">
          <Logo className="w-40" />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-agrihub-darkGreen">
          Create your AgriHub account
        </h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                        placeholder="Create a password"
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
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Confirm your password"
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-agrihub-green hover:bg-agrihub-darkGreen">
              Sign Up
            </Button>
          </form>
        </Form>
        
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-agrihub-green hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
