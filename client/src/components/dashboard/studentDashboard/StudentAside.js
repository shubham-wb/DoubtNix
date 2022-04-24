import React from "react";
import Tooltip from "@mui/material/Tooltip";

function studentAside() {
  return (
    <div
      className="aside-f-list"
      style={{
        borderRadius: "8px",
        height: "80%",
        width: "60%",
        background: "white",
        display: "Flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 4px 4px whitesmoke",
      }}
    >
      <ul
        style={{
          height: "65%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          listStyleType: "none",
          padding: "0px",
        }}
      >
        <Tooltip title="Post" placement="right">
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/2311/2311991.png"
            />
          </li>
        </Tooltip>
        <Tooltip title="Courses" placement="right">
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/865/865169.png"
            />
          </li>
        </Tooltip>
        <Tooltip title="My Doubts" placement="right">
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/2097/2097047.png"
            />
          </li>
        </Tooltip>
        <Tooltip title="My Courses" placement="right">
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/830/830958.png"
            />
          </li>
        </Tooltip>
      </ul>
      <hr />
      <ul
        style={{
          height: "30%",
          width: "80%",
          display: "flex",
          flexDirection: "row",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          listStyleType: "none",
          padding: "0px",
        }}
      >
        <Tooltip title="help" placement="left">
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/906/906794.png"
            />
          </li>
        </Tooltip>
        <Tooltip title="exit" placement="right">
          <li id="hsdlkfjah" style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png"
            />
          </li>
        </Tooltip>
      </ul>
    </div>
  );
}

const styles = {
  li: {
    borderRadius: "10px",
    height: "40px",
    width: "90%",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default studentAside;
