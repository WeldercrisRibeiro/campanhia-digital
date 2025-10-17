import React, { useState } from "react";

function App() {
  const [mostrarApartamentos, setMostrarApartamentos] = useState(false);
  const [mostrarKitnets, setMostrarKitnets] = useState(false);

  const apartamentos = [
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

  const kitnets = [
    {
      nome: "Kitnet 01",
      numeros: ["55999999999"]
    },
    {
      nome: "Kitnet 02",
      numeros: ["55988888888"]
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        {/* Substitua o texto abaixo pela sua imagem de logo */}
        <div style={styles.logo}>LOGO</div>
      </div>
      <h1 style={styles.titulo}>Campainha Digital</h1>
      <p style={styles.subtitulo}>Selecione o tipo de imóvel:</p>

      <div style={styles.botoes}>
        {/* Seção de Apartamentos */}
        <div style={styles.secao}>
          <button 
            onClick={() => setMostrarApartamentos(!mostrarApartamentos)}
            style={styles.secaoTitulo}
          >
            Apartamentos {mostrarApartamentos ? '▼' : '▼'}
          </button>
          
          {mostrarApartamentos && (
            <div style={styles.conteudoSecao}>
              {apartamentos.map((apto) => (
                <div key={apto.nome} style={styles.aptoContainer}>
                  <span style={styles.aptoLabel}>{apto.nome}</span>
                  <div style={styles.contatosContainer}>
                    {apto.numeros.map((numero, index) => (
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
          )}
        </div>

        {/* Seção de Kitnets */}
        <div style={styles.secao}>
          <button 
            onClick={() => setMostrarKitnets(!mostrarKitnets)}
            style={styles.secaoTitulo}
          >
            Kitnets {mostrarKitnets ? '▼' : '▼'}
          </button>
          
          {mostrarKitnets && (
            <div style={styles.conteudoSecao}>
              {kitnets.map((kitnet) => (
                <div key={kitnet.nome} style={styles.aptoContainer}>
                  <span style={styles.aptoLabel}>{kitnet.nome}</span>
                  <div style={styles.contatosContainer}>
                    {kitnet.numeros.map((numero, index) => (
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
          )}
        </div>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Weldercris Ribeiro. Todos os direitos reservados.
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
    width: "120px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#666",
    border: "2px dashed #999",
    borderRadius: "10px",
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
    padding: "0 1rem"
  },
  subtitulo: { 
    color: "#000000ff", 
    marginBottom: "2rem",
    fontSize: "1.2rem",
    padding: "0 1rem" 
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
    backgroundColor: "#4A4A4A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
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
    background: "#25d366",
    color: "white",
    padding: "1rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.2s",
    fontSize: "1.2rem",
    width: "90%",
    maxWidth: "300px",
    margin: "0 auto",
    display: "block",
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
