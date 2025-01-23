import logoImg from "../../../assets/images/logo.png";
import authBg from "../../../assets/images/signupBg2.png";
import SignupForm from "../_components/SignupForm";
function Signup() {
  return (
    <section className="w-full flex flex-col md:flex-row bg-gradient-to-b from-black via-black to-[#200D42] min-h-screen text-white">
      <main className="p-5 md:p-14 flex flex-col w-full md:w-[75%] gap-10 md:gap-8 items-center">
        <header className="flex items-end w-full gap-1 -translate-x-2 md:translate-x-0">
          <img src={logoImg} alt="logo" width={50} />
          <h1 className="text-2xl md:text-3xl font-bold">FocusFlow</h1>
        </header>

        <SignupForm />
      </main>

      <aside className="flex-col justify-center px-10 py-14 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg rounded-xl hidden md:flex">
        <img src={authBg} alt="background" className="w-[30rem]" />
        <p className="text-center text-lg font-medium mt-5">
          Track your progress, motivate your efforts, and celebrate your
          successes with FocusFlow.
        </p>
      </aside>
    </section>
  );
}

export default Signup;
