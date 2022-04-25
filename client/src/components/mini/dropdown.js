import React, { useState } from "react";

import down from "../../assets/images/down.svg";
import up from "../../assets/images/up.svg";

function Dropdown() {
  let [value, setValue] = useState("All Posts");
  let [clicked, setClicked] = useState(false);
  const data = ["All Posts", "Mentor Posts"];

  const SelectValue = (newValue) => {
    setValue(newValue);
  };

  const isClicked = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div style={styles.dropdown}>
      <div style={styles.btn} onClick={isClicked}>
        <div style={styles.btntxt}>{value}</div>
        <img
          src={clicked ? up : down}
          style={{ height: "30px", width: "30px" }}
          alt=""
        />
      </div>
      {clicked ? (
        <ul style={styles.list}>
          {data.map((elem) => {
            return (
              <li
                className="drop-u-post"
                style={styles.listItem}
                onClick={() => {
                  isClicked();
                  SelectValue(elem);
                }}
              >
                {elem}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;

const styles = {
  dropdown: {
    position: "relative",
    background: "transparent",
    height: "40px",
    marginLeft: "2%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "25%",
  },
  btn: {
    border: "solid 2px #616163",
    borderRadius: "8px",
    background: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btntxt: {
    paddingLeft: "20px",
    fontWeight: "600",
    color: "black",
    paddingLeft: "5px",
    fontSize: "14px",
    fontFamily: "verdana",
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "90%",
  },
  img: {
    height: "22px",
    width: "26px",
  },
  list: {
    position: "absolute",
    top: "38px",
    left: "0px",
    display: "flex",
    boxShadow: "2px 3px 10px 2px gray",
    flexDirection: "column",
    width: "170px",
    margin: "0px",
    marginTop: "3px",
    padding: "0px",
    borderRadius: "1px px 0px 0px",
    backgroundColor: "white",
  },
  listItem: {
    margin: "0px",
    fontSize: "15px",
    display: "flex",
    paddingLeft: "20px",
    alignItems: "center",
    color: "rgb(100, 100, 100)",
    height: "40px",
    cursor: "pointer",
  },
};
