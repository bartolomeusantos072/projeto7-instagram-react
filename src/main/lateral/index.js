import "./style.css";

function Usuario(props) {
  return (
    <div className="usuario">
      <img src={props.imagem} alt={props.nomeUsuario} />
      <div className="texto">
        <strong>{props.nomeInsta}</strong>
        <span> {props.nomeUsuario}</span>
      </div>
    </div>
  );
}


export default function Lateral() {

  const usuario = ["imagem/catanacomics.svg", "catanacomics", "Catana"];
  const [imagem, nomeInsta, nomeUsuario] = usuario;
  const sugestoes = [
    { user: "bad.vibes.memes", imgSrc: "imagem/bad.vibes.memes.svg" },
    { user: "chibirdart", imgSrc: "imagem/chibirdart.svg" },
    { user: "razoesparaacreditar", imgSrc: "imagem/razoesparaacreditar.svg" },
    { user: "adorable_animals", imgSrc: "imagem/adorable_animals.svg" },
    { user: "smallcutecats", imgSrc: "imagem/smallcutecats.svg" },
  ];
 const meusLinks=['Sobre ','• Ajuda ','• Imprensa ','• API ','• Carreiras ','• Privacidade ','• Termos ', '• Localizações ','• Contas mais relevantes ','• Hashtags ','• Idioma'];

  return (
    <div className="sidebar">
      <Usuario
        imagem={imagem}
        nomeInsta={nomeInsta}
        nomeUsuario={nomeUsuario}
      />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((sugestao) => (
          <div className="sugestao">
            <div className="usuario">
              <img src={sugestao.imgSrc} alt="" />
              <div className="texto">
                <div className="nome">{sugestao.user}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>
            <div className="seguir">Seguir</div>
          </div>
        ))}
      </div>
      

      <div className="links">
          {meusLinks}
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
