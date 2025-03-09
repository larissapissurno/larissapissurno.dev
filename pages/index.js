export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <img style={styles.img} src="/tec.jpeg" alt="Larissa" />
        <p>Hi! 👋 I'm Larissa and this is my piece of internet.</p>
      </div>

      <div style={styles.content}>
        <p>👩‍⚕️ Letícia Pissurno says: </p>
        <img style={styles.img} src="/sis.jpg" alt="Sis" />
      </div>
      <div style={styles.content}>
        <p>👩 💟 Taw says: </p>
        <img style={styles.img} src="/taw.jpeg" width={300} alt="Taw" />
      </div>
      <div style={styles.content}>
        <p>👩‍🎤 Anna says: </p>
        <img style={styles.img} src="/anna.jpeg" width={300} alt="Anna" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    gap: 48,

    fontFamily: "sans-serif",
    fontSize: 16,

    border: "1px solid #000",
  },

  img: {
    width: "100%",
    // height: 200,
  },

  title: {
    flexDirection: "column",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
};
