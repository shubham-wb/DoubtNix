import React from "react";
import "../assets/css/home.css";
import SearchBar from "../components/mini/SearchBar";
import vector from "../assets/images/vector01.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home">
        <header>
          <navbar>
            <div className="logo">
              <h3>Doubt</h3>
              <h3 id="nix">Nix</h3>
            </div>
            <ul className="nav-list">
              <li>
                <Link className="cool-link" to="#">
                  Buy Our Course
                </Link>
              </li>
              <li>
                <Link className="cool-link" to="#">
                  Success
                </Link>
              </li>
              <li>
                <Link className="cool-link" to="#">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="cool-link" to="#">
                  Login/Signup
                </Link>
              </li>
            </ul>
          </navbar>
          <div className="search">
            <SearchBar />
          </div>
        </header>
        <section className="landing-page">
          <div className="vector-01">
            <img src={vector}></img>
          </div>
          <div className="landing-desc">
            <h2>When in Doubt, </h2>
            <h1 className="llala">
              <div class="message">
                <div class="word1">Ask from Experts</div>
                <div class="word2">Delete it</div>
                <div class="word3">Share it</div>
              </div>
            </h1>
          </div>
        </section>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default Home;
