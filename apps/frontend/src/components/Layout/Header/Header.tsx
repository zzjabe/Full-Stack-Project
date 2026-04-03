import logoImg from "../../../assets/logo.png";
import "./Header.css";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <a href={logoImg} target="_blank">
          <img src={logoImg} alt="Code and Coffee Logo" />
        </a>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;
