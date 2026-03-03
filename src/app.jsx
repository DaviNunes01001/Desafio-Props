import React from "react";
import CardJogo from "./assets/components/main/CardJogo";
import Header from "./assets/components/header/header";
import Footer from "./assets/components/footer/footer";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <div className="titulo-pag">
        <h1>Loja De jogos</h1>
      </div>
      <div className="card-container">
        <CardJogo
          imagem="https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
          titulo="God of War"
          genero="Ação"
          preco={399.9}
          promo={true}
        />
        <CardJogo
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kCg_m11P3mVGiz82wtywHVxd7IquCi8tDA&s"
          titulo="Fortinite"
          genero="Batlle Royale"
          preco={0}
          promo={false}
        />
        <CardJogo
          imagem="https://img.utdstc.com/icon/0b3/29b/0b329b476699f6cb248922d2500289df9a9bd58a7cc95a967fc4c3c5cb4f14d4:200"
          titulo="stumble guys"
          genero="Cooperação"
          preco={0}
          promo={true}
        />
        <CardJogo
          imagem="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Minecraft_2024_cover_art.png/250px-Minecraft_2024_cover_art.png"
          titulo="Minecraft"
          genero="Aventura"
          preco={70.9}
          promo={false}
        />
      </div>
       <Footer/>
    </>
   
  );
}

export default App;
