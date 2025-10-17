import React from "react";

function App() {
  const contatos = [
    { 
      nome: "Apto 101", 
      numeros: ["55992664889", "55999999999"],
      mensagem: "Olá, gostaria de falar com o(a) morador(a) do Apto 101." 
    },
    { 
      nome: "Apto 102", 
      numeros: ["5598888888888", "5597777777777"] 
    },
    { 
      nome: "Apto 103", 
      numeros: ["5597777777777"] 
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Campainha Digital</h1>
      <p style={styles.subtitulo}>Clique no apartamento/kitnet desejado:</p>

      <div style={styles.botoes}>
        {contatos.map((c) => (
          <div key={c.nome} style={styles.aptoContainer}>
            <span style={styles.aptoLabel}>{c.nome}</span>
            <div style={styles.contatosContainer}>
              {c.numeros.map((numero, index) => (
                <a
                  key={numero}
                  href={`https://wa.me/${numero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.botao}
                >
                  Contato {index + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#f5f5f5",
  },
  titulo: { fontSize: "2rem", marginBottom: "0.5rem", color: "black"},
  subtitulo: { color: "#000000ff", marginBottom: "1.5rem" },
  botoes: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },
  aptoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  aptoLabel: {
    fontWeight: "bold",
    color: "black",
    fontSize: "1.1rem",
  },
  contatosContainer: {
    display: "flex",
    gap: "0.5rem",
  },
  botao: {
    background: "#25d366",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.2s",
    fontSize: "0.9rem",
  },
};

export default App;
