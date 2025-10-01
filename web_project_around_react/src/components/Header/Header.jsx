import logoAround from "../../images/aroundEEUU_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoAround}
        alt="Logotipo de Around The U.S."
      />
      <div className="header__divider"></div>
    </header>
  );
}
