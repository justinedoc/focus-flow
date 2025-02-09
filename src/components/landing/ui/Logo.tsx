import logoImg from "../../../assets/images/logo.png";
function Logo() {
  return (
    <main className="flex gap-1 items-center overflow-hidden">
      <img src={logoImg} alt="FocusFlow logo" width={50} />
      <h1 className="text-xl md:text-lg font-bold tracking-tight">FocusFlow</h1>
    </main>
  );
}

export default Logo;
