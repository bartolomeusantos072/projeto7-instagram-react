import { AiOutlineHeart,AiFillHome,AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import "./style.css";



export function Footer(){
    return(
        <footer>
        <div className="img-home">
            <AiFillHome/>
        </div>
        <div className="img-search">
           <AiOutlineSearch/>
        </div>
        <div className="img-add">
            <BsPlusCircle/>
        </div>
        <div className="img-heart">
            <AiOutlineHeart/>
        </div>
        <div className="img-person">
            <BsPerson/>
        </div>
    </footer>
    );
}




