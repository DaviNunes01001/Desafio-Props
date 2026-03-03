import "./Card.css";

function CardJogo({ imagem, titulo, genero, preco, promo }) {
  const statusOnSale = promo ? "Em promoção" : "Fora de promoção";

  return (
    <div className="cards-ga">
      <section>
        <img src={imagem} alt={`Nome do jogo: ${titulo}`} />
        <div className="text">
          <h1>Título: {titulo}</h1>
          <h2>Gênero do jogo: {genero}</h2>
          <p>Preço: R${preco === 0 ? "Gratuito!!" : preco}</p>
          <p>Promoção:{statusOnSale}</p>
          <div className="Alings">
            <div
              className="promoc"
              style={{ backgroundColor: promo ? "#9dff7f" : "#ff0000" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardJogo;
