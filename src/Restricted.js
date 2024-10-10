import React from "react";

const Restricted = () => {
  const limitDate = "October 10th, 2024";

  const handleClick = () => {
    alert("WTF!!!");
  };

  return (
    <div style={styles.container}>
      <p style={styles.redtext}>
        Website Restricted By Developer Due To Incomplete Payment Of
        Development.
      </p>
      <p style={styles.whitetext}>
        If you are the site owner, contact the developer and make the payment
        before {limitDate}, after that date all website data will be lost.
      </p>
      <button onClick={handleClick} style={styles.button}>
        About Dev
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
  },
  redtext: {
    fontSize: "calc(40px + 2vmin)",
    color: "#f33",
    marginBottom: 0,
    marginTop: 0,
  },
  whitetext: {
    marginBottom: "48px",
  },
  button: {
    background: "linear-gradient(to bottom, #ff9999, #cc0000)",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "24px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
  },
};

export default Restricted;
