import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../mini/SearchBar";

function StudentNav() {
  return (
    <nav id="u-nav">
      <Link
        to="/"
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "18px",
          marginRight: "50px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "white",
          }}
          className="logo"
        >
          <h3>Doubt</h3>
          <h3 id="nix">Nix</h3>
        </div>
      </Link>
      <SearchBar />
      <ul
        style={{
          height: "100%",
          width: "50%",

          marginRight: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to="Courses" style={styles.a}>
          <li style={styles.li}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
              styles={styles.img}
            ></img>
          </li>
        </Link>
        <Link to="doubts" style={styles.a}>
          <li style={styles.li}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/503/503849.png"
              styles={styles.img}
            ></img>
          </li>
        </Link>

        <Link to="" style={styles.a}>
          <li style={styles.li}></li>
        </Link>
      </ul>
    </nav>
  );
}
const styles = {
  a: {
    marginLeft: "10px",
    borderRadius: "50%",
    height: "35px",
    width: "35px",
    background: "#c8e8ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  li: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "80%",
    background: "transparent",
  },
  img: {
    borderRadius: "50%",

    height: "15px",
    width: "15px",
  },
};
export default StudentNav;
