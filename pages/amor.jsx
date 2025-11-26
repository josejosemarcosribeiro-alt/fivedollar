// arquivo: pages/amor.jsx

export default function Amor() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>ÊXODO 999</h1>
      
      {/* Vídeo do Facebook em iframe */}
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/1aQeqUyGSx/&show_text=0&width=560"
        width="560"
        height="315"
        style={{ border: "none", overflow: "hidden", marginTop: "2rem" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
