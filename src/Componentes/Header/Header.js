import "./Header.css";
import bannerImage from "../../assets/img/banner.jpg";

function Header() {
    return (
        <header className="header">
            <img src={bannerImage} alt="banner" />
        </header>
    );
}

export default Header;