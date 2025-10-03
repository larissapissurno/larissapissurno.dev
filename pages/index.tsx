import React from 'react';

interface Styles {
  container: React.CSSProperties;
  title: React.CSSProperties;
  img: React.CSSProperties;
  content: React.CSSProperties;
}

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    gap: 48,
    fontFamily: "sans-serif",
    fontSize: 16,
  },

  img: {
    width: "100%",
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

export default function Home(): React.JSX.Element {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        {/* <img style={styles.img} src="/tec.jpeg" alt="Larissa" /> */}
        <p>Hi! 👋 I'm Larissa and this is my piece of internet.</p>
      </div>
    </div>
  );
}
