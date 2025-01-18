import logoImg from "../../../assets/images/logo.png";
function Logo({ withName = false }) {
  return (
    <main className="flex gap-1 items-end">
      <img src={logoImg} alt="FocusFlow logo" width={50} />
      {withName && (
        <h1 className="text-lg font-bold tracking-tight md:block hidden">
          FocusFlow
        </h1>
      )}
    </main>
  );
}

export default Logo;
