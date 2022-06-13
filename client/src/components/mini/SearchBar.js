import React from "react";
import { useState } from "react";
import searchIco from "../../assets/images/search.svg";
import close from "../../assets/images/close.svg";

function SearchBar() {
  let [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue((value = event.target.value));
  };
  return (
    <div className='search-bar' style={Styles.searchBar}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        style={Styles.input}
        placeholder='Search Courses ...'
      ></input>
      {value !== "" ? (
        <img
          style={Styles.svg}
          src={close}
          onClick={() => {
            setValue((value = ""));
          }}
          alt=''
        ></img>
      ) : (
        <img style={Styles.svg} src={searchIco} alt=''></img>
      )}
    </div>
  );
}

const Styles = {
  searchBar: {
    justifyContent: "center",
    height: "70%",
    width: "40%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    borderColor: "white",
    marginTop: "5px",
    alignItems: "center",
  },

  input: {
    backgroundColor: "whitesmoke",
    height: "70%",
    marginLeft: "14px",
    width: "90%",
    borderColor: "transparent",
  },

  svg: {
    /* fill: gray; */
    height: "72%",
    width: "10%",
  },
};

export default SearchBar;
