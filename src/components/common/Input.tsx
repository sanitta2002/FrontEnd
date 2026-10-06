import type { InputProps } from "@/types";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  error,
  registration,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-5">
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={label}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...registration}
          className={`h-14 w-full rounded-xl border px-4 pr-12 outline-none transition ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-black"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;