// arquivo: pages/amor.jsx

export default function Amor() {
  return (
    <div style={{ padding: "2rem", textAlign: "left" }}>
      <h1>ÊXODO 999</h1>

      {/* Vídeo do YouTube em iframe */}
      <iframe
        width="560"        // médio
        height="315"
        src="https://www.youtube.com/embed/YHYc1Us8mMo"
        title="ÊXODO 999"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: "block", marginTop: "1rem" }}
      ></iframe>
    </div>
  );
}
