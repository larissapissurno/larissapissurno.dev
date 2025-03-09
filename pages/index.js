export default function Home() {
  return (
    <div style={styles.container}>
      Hi 👋 I'm Larissa and this is my piece of internet.
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    fontFamily: "sans-serif",
    fontSize: 24,
  },
};
