import { AiOutlineHeart,AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import {IoHome} from "react-icons/io";
import "./style.css";



export function Footer(){
    return(
        <footer>
        <div className="icons">
            <IoHome/>
        </div>
        <div className="icons">
           <AiOutlineSearch/>
        </div>
        <div className="icons">
            <BsPlusCircle/>
        </div>
        <div className="icons">
            <AiOutlineHeart/>
        </div>
        <div className="icons">
            <BsPerson/>
        </div>
    </footer>
    );
}




