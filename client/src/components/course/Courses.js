import React from "react";
import { connect } from "react-redux";
function Courses(props) {
  const { courses } = props.courses;
  return (
    <>
      <div
        className='wrapper'
        style={{
          marginTop: "10%",
          width: "75%",
          marginLeft: "20%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          background: "yellow",
        }}
      >
        <div
          className='premium-banner'
          style={{
            height: "20%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          <div style={{ height: "100%", width: "30%", marginLeft: "4%" }}>
            <h2 style={{ padding: "0px", marginBottom: "0px" }}>
              Update your Plan
            </h2>
            <h6 style={{ marginTop: "10px" }}>
              see the benefits of new proposal specially for you
            </h6>
          </div>
          <button
            style={{
              width: "15%",
              height: "50%",
              borderRadius: "25px",
              backgroundColor: "white",
              color: "purple",
              borderColor: "purple",
              fontWeight: "600",
            }}
          >
            Discover more -&gt;
          </button>
        </div>
      </div>
      {courses
        ? courses.map((elem) => {
            console.log(elem);
            return (
              <div className='course-container'>
                <div>{elem.name}</div>
              </div>
            );
          })
        : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return state.courseReducer;
};

export default connect(mapStateToProps)(Courses);
