import logoImg from "../../../assets/images/logo.png";
import authBg from "../../../assets/images/authBg.png";
import SignupForm from "../ui/SignupForm";
function Signup() {
  return (
    <section className="w-full flex bg-gradient-to-b from-black via-black to-[#200D42] min-h-screen text-white">
      <main className="p-16 flex flex-col w-[75%] gap-12 items-center">
        <header className="flex items-end w-full">
          <img src={logoImg} alt="logo" width={50} />
          <h1 className="text-3xl font-bold md:block hidden">FocusFlow</h1>
        </header>

        <SignupForm />
      </main>

      <aside className="flex flex-col justify-center px-10 py-14 backdrop-blur-md bg-black/40">
        <img src={authBg} alt="background" className="w-[30rem]" />
        <p className="text-center text-lg font-medium">
          Track your progress, motivate your efforts, and celebrate your
          successes with FocusFlow.
        </p>
      </aside>
    </section>
  );
}

export default Signup;
