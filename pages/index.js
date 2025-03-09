export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        Hi! 👋 I'm Larissa and this is my piece of internet.
      </div>

      <div style={styles.content}>
        <p>👩‍⚕️ Letícia Pissurno says: </p>
        <img src="/sis.jpg" width={200} alt="My sis loves me" />
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: 24,

    // border: "1px solid black",

    width: "50vw",
  },
};
