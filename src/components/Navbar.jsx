import logo from "../assets/Is.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaBehance } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-2 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ivanaspinoso/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ivanaspinoso" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.behance.net/ivanaspinoso_" target="_blank" rel="noopener noreferrer">
                    <FaBehance />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
