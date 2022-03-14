import { AiOutlineHeart } from "react-icons/ai";
import { BsInstagram, BsPerson } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import logo from "./logo.png";
import "./style.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="begin-menu">
          <div className="img-instagram">
            <BsInstagram />
          </div>
          <div className="coluna"></div>
          <div className="logo-instagram">
            <img src={logo} alt="Logo Instagram" />
          </div>
          <div className="img-paper">
            <FiSend />
          </div>
        </div>
        <div className="input-search">
          
          <div className="pesquisa">Pesquisa</div>
        </div>
        <div className="icones-menu">
          <div className="img-paper">
            <FiSend />
          </div>
          <div className="img-compass">
            <MdOutlineExplore />
          </div>
          <div className="img-heart">
            <AiOutlineHeart />
          </div>
          <div className="img-person">
            <BsPerson />
          </div>
        </div>
      </div>
    </header>
  );
}
