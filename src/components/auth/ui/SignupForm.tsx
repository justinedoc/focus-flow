import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import { CustomLink } from "./CustomLink";
import { FormHead } from "./FormHead";

export default function SignupForm() {
  return (
    <form className="flex flex-col gap-7 md:max-w-[80%] mt-5">
      <FormHead title="Create an account">
        Already have an account? <CustomLink>Login</CustomLink>
        or <CustomLink>Login with SSO</CustomLink>
      </FormHead>

      <button className="flex items-center gap-2 text-md border border-gray-400/30 justify-center py-2 rounded-sm bg-white text-black font-medium">
        <FcGoogle size={24} className="" />
        <span>Continue with Google</span>
      </button>

      <section className="flex flex-col gap-2">
        <label className="text-md font-semibold">Email</label>
        <input
          type="email"
          name="email"
          className="border border-gray-400/30 bg-transparent w-full p-2 rounded-sm outline-none focus:ring-2 ring-[#200D42]"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label className="text-md font-semibold">Password</label>
        <input
          type="password"
          name="password"
          className="border border-gray-400/30 bg-transparent w-full p-2 rounded-sm outline-none focus:ring-2 ring-[#200D42]"
        />
      </section>

      <Button type="submit">Create a free account</Button>

      <p>
        By creating an account, you agree to FocusFlow's{" "}
        <CustomLink>Terms of Service</CustomLink>,{" "}
        <CustomLink>Privacy Policy</CustomLink> and{" "}
        <CustomLink>Acceptable Use Policy</CustomLink>.
      </p>
    </form>
  );
}
