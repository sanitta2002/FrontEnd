import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/utils/validation";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { login, loginAsGuest } from "@/features/authService";
import { guestLogin, loginSuccess } from "@/features/auth/authSlice";
import { toast } from "sonner";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
 

  const onSubmit = useCallback(async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const success = await login(data);
      if (!success) {
        toast.error("Invalid email or password");
        return;
      }
      dispatch(loginSuccess());
      toast.success("Login successful");
      navigate("/home");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, navigate]);

  const handleGuestLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const success = await loginAsGuest();
      if (!success) {
        toast.error("Unable to continue as guest");
        return;
      }
      dispatch(guestLogin());
      toast.success("Welcome! Continuing as guest");
      navigate("/home");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, navigate]);

  return (
    <main className="min-h-screen bg-white">
      <div className="animate-enter mx-auto flex min-h-screen w-full max-w-[448px] flex-col px-6 pt-12 pb-4 relative">
        
      
        <div className="mx-auto mt-6 mb-5 flex items-center justify-center gap-3">
       
          <div className="relative flex items-center justify-center text-hl-red font-serif text-[64px] font-medium leading-none">
            <span className="z-10">H</span>
            <span className="absolute left-[38px] bottom-0 -z-0">L</span>
          </div>
          
      
          <div className="w-[1px] h-12 bg-hl-red/30 mx-1"></div>
          
       
          <div className="flex flex-col">
            <span className="font-serif text-[28px] font-bold leading-none text-gray-900 tracking-tight">Hush Lush</span>
            <span className="text-[7.5px] font-bold tracking-widest text-hl-red mt-1 uppercase">
              Advertising & Technologies
            </span>
          </div>
        </div>

  
        <p className="text-center text-[12px] font-medium text-gray-600 mb-10 px-2 leading-relaxed">
          Warely Pass Grants Access to Log in at any of Our Partnered Restaurants.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
          
          <Input
            label="Email"
            type="email"
            placeholder="Mail ID"
            registration={register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            registration={register("password")}
            error={errors.password?.message}
          />

         
          <div className="flex justify-end mb-8">
            <Button variant="text" className="text-[13px] text-hl-red decoration-hl-red hover:text-hl-red-dark">
              Use Email-ID Instead
            </Button>
          </div>

      
          <div className="flex justify-center mb-6">
            <span className="text-gray-400 font-medium text-lg">Or</span>
          </div>

          <div className="flex justify-center gap-5 mb-8">
            <Button variant="outline">
               <svg viewBox="0 0 24 24" width="22" height="22" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Button>
            <Button variant="outline">
               <svg viewBox="0 0 24 24" width="22" height="22" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.304-.346-.11l-6.4 4.024-2.76-.86c-.6-.185-.612-.6.125-.89l10.79-4.156c.5-.184.945.115.827 1.05z" /></svg>
            </Button>
            <Button variant="outline">
               <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </Button>
          </div>

          <p className="text-center text-[12px] font-bold text-gray-700 mb-6 px-1">
            By ordering, You have Read and Agreement to Our{" "}
            <a href="#" className="text-hl-red underline decoration-1 underline-offset-2">Terms of Use</a>
            {" "}and{" "}
            <a href="#" className="text-hl-red underline decoration-1 underline-offset-2">Privacy Policy</a>
          </p>

          <Button
            type="submit"
            loading={isLoading}
            className="mb-6 !bg-[#DE1E26] hover:!bg-hl-red-dark !h-12 !rounded-lg"
          >
            Submit
          </Button>
          
          <div className="flex justify-center mb-8">
            <Button
              variant="text"
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="text-[14px]"
            >
              Sign as Guest
            </Button>
          </div>

        </form>

      
        <div className="mt-auto text-center border-t border-gray-100 pt-3 relative overflow-hidden">

          <p className="text-[11px] font-bold text-gray-900 relative z-10">
            Powered By{" "}
            <span className="font-serif italic text-hl-red text-[13px] tracking-wide">Hush Lush</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;