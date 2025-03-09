export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <img src="/tec.jpeg" width={500} alt="Larissa" />
        <p>Hi! 👋 I'm Larissa and this is my piece of internet.</p>
      </div>

      <div style={styles.content}>
        <p>👩‍⚕️ Letícia Pissurno says: </p>
        <img src="/sis.jpg" width={300} alt="Sis" />
      </div>
      <div style={styles.content}>
        <p>👩 💟 Taw says: </p>
        <img src="/taw.jpeg" width={300} alt="Taw" />
      </div>
      <div style={styles.content}>
        <p>👩‍🎤 Anna says: </p>
        <img src="/anna.jpeg" width={300} alt="Anna" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: 48,

    fontFamily: "sans-serif",
    fontSize: 16,
  },

  img: {
    width: 200,
    height: 200,
  },

  title: {
    flexDirection: "column",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    width: "50vw",
  },
};
