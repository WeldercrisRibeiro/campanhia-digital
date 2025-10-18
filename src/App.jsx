import React, { useState } from "react";
import logoImg from "./assets/logo-welder.png";

function App() {
  const [mostrarApartamentos, setMostrarApartamentos] = useState(false);
  const [mostrarKitnets, setMostrarKitnets] = useState(false);

  const apartamentos = [
    {
      nome: "Apto 101",
      contatos: [
        { nome: "Welder Teste", numero: "5585992664889" },
        { nome: "Weldercris Teste", numero: "5585992664889" },
      ],
      mensagem: "Olá, gostaria de falar com o(a) morador(a) do Apto 101.",
    },
  ];

  const kitnets = [
    {
      nome: "Kitnet 07",
      contatos: [{ nome: "Abraão", numero: "5585985065358" }],
      mensagem: "Olá, gostaria de falar com o(a) morador(a) do Kitnet 07.",
    },
    {
      nome: "Kitnet 08",
      contatos: [{ nome: "Welder", numero: "5585992664889" }],
      mensagem: "Olá, gostaria de falar com o(a) morador(a) do Kitnet 08.",
    },
    {
      nome: "Kitnet 16",
      contatos: [{ nome: "Jeverson", numero: "5585997114612" }],
      mensagem: "Olá, gostaria de falar com o(a) morador(a) do Kitnet 16.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logoImg} alt="Logo Campainha Digital" style={styles.logo} />
      </div>
      <h1 style={styles.titulo}>Campainha Digital</h1>
      <p style={styles.subtitulo}>Deseja falar com alguém? Selecione o tipo de imóvel e a numeração:</p>

      <div style={styles.botoes}>
        {/* Seção de Apartamentos */}
        <div style={styles.secao}>
          <button
            onClick={() => setMostrarApartamentos(!mostrarApartamentos)}
            style={styles.secaoTitulo}
            className="secao-titulo"
          >
            Apartamentos {mostrarApartamentos ? "▼" : "▶"}
          </button>

          {mostrarApartamentos && (
            <div style={styles.conteudoSecao}>
              {apartamentos.map((apto) => (
                <div key={apto.nome} style={styles.aptoContainer}>
                  <span style={styles.aptoLabel}>{apto.nome}</span>
                  <div style={styles.contatosContainer}>
                    {apto.contatos.map((contato) => (
                      <a
                        key={contato.numero}
                        href={`https://wa.me/${
                          contato.numero
                        }?text=${encodeURIComponent(
                          apto.mensagem ||
                            "Olá, gostaria de falar com o(a) morador(a)."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.botao}
                        className="contato-botao"
                      >
                        {contato.nome}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Seção de Kitnets */}
        <div style={styles.secao}>
          <button
            onClick={() => setMostrarKitnets(!mostrarKitnets)}
            style={styles.secaoTitulo}
            className="secao-titulo"
          >
            Kitnets {mostrarKitnets ? "▼" : "▶"}
          </button>

          {mostrarKitnets && (
            <div style={styles.conteudoSecao}>
              {kitnets.map((kitnet) => (
                <div key={kitnet.nome} style={styles.aptoContainer}>
                  <span style={styles.aptoLabel}>{kitnet.nome}</span>
                  <div style={styles.contatosContainer}>
                    {kitnet.contatos.map((contato) => (
                      <a
                        key={contato.numero}
                        href={`https://wa.me/${
                          contato.numero
                        }?text=${encodeURIComponent(
                          kitnet.mensagem ||
                            "Olá, gostaria de falar com o(a) morador(a)."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.botao}
                        className="contato-botao"
                      >
                        {contato.nome}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Weldercris Ribeiro. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}

const styles = {
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },
  logo: {
    width: "150px",
    height: "auto",
    maxWidth: "100%",
    objectFit: "contain",
  },
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
    maxWidth: "480px",
    padding: "1rem",
    paddingTop: "4rem",
    boxSizing: "border-box",
  },
  titulo: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "black",
    padding: "0 1rem",
  },
  subtitulo: {
    color: "#000000ff",
    marginBottom: "2rem",
    fontSize: "1.2rem",
    padding: "0 1rem",
  },
  botoes: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
  },
  secao: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  secaoTitulo: {
    width: "100%",
    padding: "1rem",
    fontSize: "1.3rem",
    fontWeight: "bold",
    backgroundColor: "#da641f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    transition: "background-color 0.2s",
  },
  conteudoSecao: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "0.5rem",
  },
  aptoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
  },
  aptoLabel: {
    fontWeight: "bold",
    color: "black",
    fontSize: "1.3rem",
    marginBottom: "0.5rem",
  },
  contatosContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    width: "100%",
    alignItems: "center",
  },
  botao: {
    background: "#1a2217ff",
    color: "white",
    padding: "1rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    fontSize: "1.2rem",
    width: "90%",
    maxWidth: "300px",
    margin: "0 auto",
    display: "block",
    boxShadow: "0 2px 4px rgba(121, 11, 11, 0.1)",
  },
  footer: {
    marginTop: "4rem",
    padding: "1rem",
    color: "#666",
    fontSize: "0.9rem",
    borderTop: "1px solid #eee",
  },
};

export default App;
