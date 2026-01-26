import logoImg from "../../assets/logo.png";
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href={logoImg} target="_blank">
                    <img src={logoImg} alt="Code and Coffee Logo" />
                </a>
            </div>
            <div>
                <h1>Code and Coffee's Library</h1>
            </div>

        </header>
    )
}

export default Header;