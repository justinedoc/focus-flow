import { FcGoogle } from "react-icons/fc";
import { CustomLink } from "../ui/CustomLink";
import { FormHead } from "../ui/FormHead";
import { useState } from "react";
import { InputBox } from "../ui/InputBox";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { DarkOverlay } from "../ui/DarkOverlay";
import LoadingAnim from "../ui/LoadingAnim";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

export default function LoginForm() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function login(data: FieldValues) {
    // TODO: send to server
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="flex flex-col gap-7 w-full md:max-w-[80%] md:mt-5"
    >
      <FormHead title="Login to your account">
        Don't have an account? <CustomLink to="/signup">Signup</CustomLink>
      </FormHead>

      <button
        type="button"
        className="flex items-center gap-2 text-md border border-gray-400/30 justify-center py-2 rounded-sm bg-white text-black font-medium"
      >
        <FcGoogle size={24} className="" />
        <span>Continue with Google</span>
      </button>

      <InputBox>
        <label className="text-md font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          className={`border ${
            errors?.email ? "border-red-500" : "border-gray-400/30"
          }  bg-transparent w-full p-2 rounded-sm focus:ring-1 focus:ring-[#200D42] focus:border-[#200D42] outline-none`}
        />

        {errors?.email && (
          <p className="text-red-500 text-xs capitalize">
            {errors?.email?.message as string}
          </p>
        )}
      </InputBox>

      <InputBox>
        <label className="text-md font-semibold">Password</label>
        <input
          {...register("password")}
          type={isPasswordHidden ? "password" : "text"}
          name="password"
          className={`border border-gray-400/30 bg-transparent w-full p-2 rounded-sm focus:ring-1 focus:ring-[#200D42] focus:border-[#200D42] outline-none`}
        />

        <aside
          className="absolute top-0 right-0 flex gap-2 items-center font-medium cursor-pointer"
          onClick={() => setIsPasswordHidden((isHidden) => !isHidden)}
        >
          {isPasswordHidden ? <IoEye /> : <IoEyeOff />}
          <span>{isPasswordHidden ? "Show" : "Hide"}</span>
        </aside>
      </InputBox>

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-[#2b0e5d] font-semibold hover:bg-zinc-500/50"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>

      <p className="text-sm text-center">
        By creating an account, you agree to FocusFlow's{" "}
        <CustomLink>Terms of Service</CustomLink>,{" "}
        <CustomLink>Privacy Policy</CustomLink> and{" "}
        <CustomLink>Acceptable Use Policy</CustomLink>.
      </p>

      {isSubmitting && (
        <DarkOverlay>
          <LoadingAnim />
        </DarkOverlay>
      )}
    </form>
  );
}
