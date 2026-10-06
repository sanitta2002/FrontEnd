import type { ButtonProps } from "@/types";

interface ExtendedButtonProps extends Omit<ButtonProps, 'className'> {
  className?: string;
  variant?: "primary" | "outline" | "text";
}

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  variant = "primary",
}: ExtendedButtonProps) => {
  const baseStyles = "flex items-center justify-center transition disabled:cursor-not-allowed disabled:opacity-50 font-semibold";
  
  const variants = {
    primary: "h-14 w-full rounded-xl bg-black text-white hover:bg-gray-800",
    outline: "h-[46px] w-[60px] rounded-xl border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-900",
    text: "bg-transparent text-gray-600 hover:text-gray-900 underline decoration-1 underline-offset-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;