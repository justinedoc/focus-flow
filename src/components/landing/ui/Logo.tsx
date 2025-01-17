import logoImg from "../../../assets/images/logo.png";
function Logo({ withName = false }) {
  return (
    <main className="flex gap-1 items-end">
      <img src={logoImg} alt="FocusFlow logo" width={45} />
      {withName && (
        <h1 className="text-lg font-bold tracking-tight">FocusFlow</h1>
      )}
    </main>
  );
}

export default Logo;
