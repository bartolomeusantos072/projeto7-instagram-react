import {IoIosArrowDropright} from "react-icons/io";
import "./style.css";



 function Contatos(){

    const stories = [
        {imagem:"imagem/9gag.svg", usuario:"9gag"},
        {imagem:"imagem/meowed.svg", usuario:"meowed"},
        {imagem:"imagem/barked.svg", usuario:"barked"},
        {imagem:"imagem/nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {imagem:"imagem/wawawicomics.svg", usuario:"wawawicomics"},
        {imagem:"imagem/respondeai.svg", usuario:"respondeai"},
        {imagem:"imagem/filomoderna.svg", usuario:"filomoderna"},
        {imagem:"imagem/memeriagourmet.svg", usuario:"memeriagourmet"}
    ];
   return stories.map((storie)=>{ 
        return(
        <div className="story">
            <div className="imagem">
                <img src={storie.imagem} alt={storie.usuario}/>
            </div>
            <div className="usuario">
                {storie.usuario}
            </div>
      </div>)
    });
    

        
    
}

export default function Stories(){
    return(
        <>
        <Contatos/>
        <div className="setinha">
              <IoIosArrowDropright/>
        </div>
        </>
    );
}