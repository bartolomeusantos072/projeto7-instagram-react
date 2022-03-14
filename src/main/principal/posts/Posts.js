import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";

import "./style.css";

export default function Posts() {
  const postagens = [
    {
      usuarioPost: "meowed",
      usuarioImgPost: "imagem/meowed.svg",
      imagemPost: "imagem/gato-telefone.svg",
      imagemCurtida: "imagem/respondeai.svg",
      ultimaCurtida: "respondeai",
      totalCurtidas: 101.523,
    },
    {
        usuarioPost: "barked",
        usuarioImgPost: "imagem/barked.svg",
        imagemPost: "imagem/dog.svg",
        imagemCurtida: "imagem/adorable_animals.svg",
        ultimaCurtida: "adorable_animals",
        totalCurtidas: 99.159,
      }
  ];
  return postagens.map(postagem =>{
      return(
         
    <div className="post">
    <div className="topo">
      <div className="usuario">
        <img src={postagem.usuarioImgPost} alt="" />
        {postagem.usuarioPost}
      </div>

      <div className="acoes">
        <IoEllipsisHorizontalOutline />
      </div>
    </div>

    <div className="conteudo">
      <img src={postagem.imagemPost} alt="" />
    </div>

    <div className="fundo">
      <div className="acoes">
        <div className="icons">
          <AiOutlineHeart />
          <BsChat />
          <FiSend />
        </div>
        <div>
          <BsBookmark />
        </div>
      </div>

      <div className="curtidas">
        <img src={postagem.imagemCurtida} alt="" />
        <div className="texto">
          Curtido por <strong>{postagem.ultimaCurtida}</strong> e{" "}
          <strong>outras {postagem.totalCurtidas} pessoas</strong>
        </div>
      </div>
    </div>
  </div>       
      )
  });
}
