import React, { useEffect } from "react";
import "../../assets/css/uDashboard.css";
import StudentDashboard from "../dashboard/studentDashboard/StudentDashboard";
import StudentNav from "./studentDashboard/StudentNav";
import Doubts from "../posts/Doubts";
import { Routes, Route, Link } from "react-router-dom";
import Courses from "../course/Courses";
import StudentAside from "./studentDashboard/StudentAside";
import { connect } from "react-redux";
import { getPosts } from "../../api";
import { addPostsToState } from "../../actions/post";
const StudentDash = (props) => {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      if (response.success) {
        props.addPostsToState(response.data.data); //dispatch action
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className='u-dashboard'>
        <StudentNav />
        <div className='u-main'>
          <aside
            style={{
              position: "fixed",
              top: "16%",
              background: "#f4f4f4",
              paddingLeft: "20px",
              height: "100%",
              width: "8%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <StudentAside />
          </aside>
          <Routes>
            <Route exact path='/' element={<StudentDashboard />}></Route>
            <Route exact path='/doubts' element={<Doubts />}></Route>
            <Route exact path='/courses' element={<Courses />}></Route>
          </Routes>
        </div>
      </div>

      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "0%",
          background: "black",
          color: "white",
          height: "7vh",
        }}
      >
        <nav
          style={{
            paddingLeft: "40px",
            height: "100%",
            display: "flex",
            color: "white",
            width: "80%",
          }}
        >
          <section
            className='footer-section'
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link target='_blank' to='/about-us'>
              About Us
            </Link>
            <Link target='_blank' to='/authors'>
              Authors
            </Link>
            <Link target='_blank' to='/contact-us'>
              Contact Us
            </Link>
            <Link target='_blank' to='/faqs'>
              FAQs
            </Link>

            <Link target='_blank' to='/privacy-policy'>
              Privacy Policy
            </Link>
            <Link target='_blank' to='/sitemap'>
              Sitemap
            </Link>
            <Link target='_blank' to='/careers'>
              Careers
            </Link>
          </section>
          <section
            style={{
              height: "100%",
              width: "30%",
              fontSize: "14px",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <p>Doubt Nix © 2022</p>
          </section>
        </nav>
      </footer>
    </>
  );
};

const mapStateToProps = (state) => {
  const { postReducer } = state;
  return {
    postReducer,
  };
};
export default connect(mapStateToProps, { addPostsToState })(StudentDash);
