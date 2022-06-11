import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../assets/css/home.css"; //css file

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import faculty from "../assets/images/faculty.png";
import omr from "../assets/images/omr.jpg";
import jsc from "../assets/images/xam.jpg";
import skills from "../assets/images/skills.jpg";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Courses from "../components/mini/Courses";
import Carousel from "../components/mini/Carousel";
import StudentCarousel from "../components/mini/StudentCarousel";
import SearchBar from "../components/mini/SearchBar";
import playBtn from "../assets/images/playBtn.svg";
import group from "../assets/images/group.svg";
import chat from "../assets/images/chat.svg";
import bg from "../assets/images/bg12.png";
import Login from "../components/credentials/SignIn";

function Home(props) {
  let { user } = props.authReducer;
  let [login, setLogin] = useState(false);
  let courses = [
    {
      name: "Programming",
      image:
        "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
      numberOfCourses: "250+",
    },
    {
      name: "Web Development",
      image:
        "https://linkconsulting.com/wp-content/uploads/2019/09/cloud-apps-1200x675.jpg",
      numberOfCourses: "100+",
    },
    {
      name: "Data Science",
      image:
        "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/06/iStock-1221293664-1.jpg",
      numberOfCourses: "70+",
    },
    {
      name: "Product Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrumZDtnSeO7X48ACQ5nXeYa7yILJnXIpXiw&usqp=CAU",
      numberOfCourses: "90+",
    },
  ];
  let [next, setNext] = useState(0);
  let [value, setValue] = useState(1);

  if (login) {
    let loginBtn = document.getElementById("login-box");
    if (loginBtn !== null) {
      loginBtn.style.height = "300px";
    }
  } else if (login === false) {
    let loginBtn = document.getElementById("login-box");
    if (loginBtn !== null) {
      loginBtn.style.height = "0px";
    }
  }
  const handleNext = () => {
    document.getElementById("f-card-1").style.transform =
      "translateX(" + -900 + "px)";

    document.getElementById("f-card-2").style.transform =
      "translateX(" + -900 + "px)";

    document.getElementById("f-card-3").style.transform =
      "translateX(" + -880 + "px)";

    document.getElementById("f-card-4").style.transform =
      "translateX(" + -850 + "px)";
  };
  const handlePrev = () => {
    document.getElementById("f-card-4").style.transform =
      "translateX(" + 0 + "px)";

    document.getElementById("f-card-3").style.transform =
      "translateX(" + 0 + "px)";

    document.getElementById("f-card-2").style.transform =
      "translateX(" + 0 + "px)";

    document.getElementById("f-card-1").style.transform =
      "translateX(" + 0 + "px)";
  };

  const handleLoginBtn = () => {
    setLogin((prevState) => !prevState);
  };

  const handlePrevS = () => {
    if (next < 500) {
      setNext((prevState) => prevState + 500);
      setValue((value = value - 1));
      let a = document.getElementById("shape");
      a.style.strokeWidth = "3px";
      a.style.strokeDashoffset = 0;
      a.style.strokeDasharray = 760;
      a.style.borderRadius = "100%";

      setTimeout(() => {
        a.style.strokeDasharray = "0 540";
        a.style.strokeDashOffset = "-474";
      }, 600);
    }
  };
  const handleNextS = () => {
    if (next > -500) {
      setNext((prevState) => prevState - 500);
      setValue((value = value + 1));
      let a = document.getElementById("shape");
      a.style.strokeWidth = "3px";
      a.style.strokeDashoffset = 0;
      a.style.strokeDasharray = 760;
      a.style.borderRadius = "100%";

      setTimeout(() => {
        a.style.strokeDasharray = "0 540";
        a.style.strokeDashOffset = "-474";
      }, 1000);
    }
  };

  return (
    <>
      <div className='home'>
        <header>
          <nav>
            <div className='logo'>
              <h3>Doubt</h3>
              <h3 id='nix'>Nix</h3>
            </div>
            <ul className='nav-list'>
              <li>
                <Link className='cool-link' to='#'>
                  Buy Our Course
                </Link>
              </li>
              <li>
                <Link className='cool-link' to='#'>
                  Success
                </Link>
              </li>
              <li>
                <Link className='cool-link' to='#'>
                  Categories
                </Link>
              </li>
              <li>
                {Object.keys(user).length !== 0 ? (
                  <Button
                    variant='contained'
                    style={{
                      fontSize: "0.8rem",
                      textTransform: "none",
                      height: "90%",
                      width: "90px",
                      backgroundColor: "purple",
                    }}
                  >
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to='/dashboard/0'
                    >
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button
                    id='login-btn'
                    style={{
                      fontSize: "0.8rem",
                      textTransform: "none",
                      height: "90%",
                      width: "90px",

                      backgroundColor: "purple",
                    }}
                    variant='contained'
                    onClick={() => {
                      handleLoginBtn();
                    }}
                  >
                    Login/SignUp
                  </Button>
                )}
              </li>
            </ul>
          </nav>
          <div className='search'>
            <SearchBar />
          </div>
          <Login />
        </header>
        <section className='landing-page'>
          <div className='vector-01'>
            <img src={bg} alt=''></img>
          </div>
          <div className='landing-desc'>
            <h2>
              Doubt
              <span
                style={{
                  marginLeft: "8px",

                  borderBottom: "solid 3px white ",
                }}
              >
                Nix
              </span>
            </h2>
            <h1 className='llala'>
              <div className='message'>
                <div className='word1'>Have a Doubt ?</div>
                <div className='word2'>Ask from Experts</div>
                <div className='word3'>Learn from courses</div>
              </div>
            </h1>

            <div className='a'>
              <div className='a1'>
                <img src={group} alt=''></img>
                <span>
                  <b>50+</b> Teacher
                </span>
              </div>
              <div className='a1'>
                <img src={chat} alt=''></img>

                <span>
                  <b>1-1</b> Mentorship
                </span>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className='awards'>
            <h1>India's No.1 E-Learning Platform</h1>
            <div className='awards-wrapper'>
              <div className='award'>
                <div className='badge'>
                  <img
                    src='https://bigideasd.com/wp-content/uploads/2018/11/award-icon-06.png'
                    alt=''
                  ></img>
                </div>

                <div className='award-h'>
                  <h1>Best Education Website</h1>
                  <span>WSSSI Awards 2022</span>
                </div>
              </div>
              <div className='award'>
                <div className='badge'>
                  <img
                    src='https://bigideasd.com/wp-content/uploads/2018/11/award-icon-06.png'
                    alt=''
                  ></img>
                </div>
                <div className='award-h'>
                  <h1>Best Education Platform </h1>
                  <span>WSSSI Awards 2022</span>
                </div>
              </div>
              <div className='award'>
                <div className='badge'>
                  <img
                    src='https://bigideasd.com/wp-content/uploads/2018/11/award-icon-06.png'
                    alt=''
                  ></img>
                </div>
                <div className='award-h'>
                  <h1>Top 10 Platforms</h1>
                  <span>WSSSI Awards 2022</span>
                </div>
              </div>
            </div>
          </section>

          {/* choose your preparation */}
          <section className='chs-prep'>
            <div className='chs-header'>
              <h1>Choose Your Preparation</h1>
              <h2>
                Select your
                <span style={{ color: "#ff04c9", fontWeight: "0px" }}>
                  {" "}
                  course{" "}
                </span>
                category and let the adventure begin
              </h2>
            </div>
            <div className='chs-opt'>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='140'
                  image={omr}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Competitive Exams
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Courses to cover all your competitive exams requirement and
                    additional doubt support from fellow students and expert
                    faculties
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='52'
                  image={jsc}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Class 6th To 12th
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Build your concepts from Basics while learning and 100%
                    doubt free . 1 to 1 interaction with the faculty. 24X7 Doubt
                    clearing
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='52'
                  image={skills}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Technical Skills
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Revamp your self with our technical courses . Courses are
                    built on basis to make you industry ready .Courses for
                    improvinf soft skills
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </section>

          {/* Tutor signup  */}

          <section className='tut-signup'>
            <div className='tut-signup-wrapper'>
              <div className='b1'>Join Nation's Largest Tutor Community</div>
              <div className='b2'>
                We are Faculties most loved platform{" "}
                <span style={{ color: "red" }}> ❤ </span> from all our the
                world.We have Teachers from various education fields and a
                diverse culture .{" "}
              </div>
              <div className='b3'>
                <Button variant='contained'>
                  <Link to='/signup/faculty'>Join Now</Link>
                </Button>
              </div>
              <img src={faculty} alt=''></img>
            </div>
          </section>
          <section className='faculty-rating'>
            <div className='f-r-header'>
              <h1>Top Teachers</h1>
              <h2>Meet our top rated teachers across Country</h2>
            </div>
            <div className='f-r-carousel'>
              <Carousel />
            </div>

            <div
              className='car-btn'
              style={{
                marginBottom: "20px",
              }}
            >
              <button
                id='prev'
                onClick={() => {
                  handlePrev();
                }}
              >
                &lt;
              </button>
              <button
                id='next'
                onClick={() => {
                  handleNext();
                }}
              >
                &gt;
              </button>
            </div>
          </section>
          <section className='courses-list'>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              Top Courses
            </h1>
            <h5>Most Browsed Courses By Students</h5>
            <Courses />
          </section>

          <section className='student-testimonial'>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              What our students say
            </h1>
            <h5>Course Feedback of Students</h5>
            <div className='loffsa'>
              <button
                onClick={() => {
                  handlePrevS();
                }}
                id='prev-st'
                style={{
                  borderColor: "grey",
                  backgroundColor: "transparent",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src='https://cdn-icons-png.flaticon.com/512/467/467274.png'
                  alt=''
                ></img>
              </button>

              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "80%",
                }}
              >
                <StudentCarousel data={{ next, value }} />
              </div>
              <button
                onClick={() => {
                  handleNextS();
                }}
                id='next-st'
                style={{
                  backgroundColor: "transparent",
                  borderColor: "grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src='https://cdn-icons-png.flaticon.com/512/467/467282.png'
                  alt=''
                ></img>
              </button>
            </div>
          </section>

          <section className='faculty-showcase'>
            <h1
              style={{
                fontWeight: "800",
              }}
            >
              Courses By Instructor
            </h1>
            <h5>List of Courses by Instructor</h5>
            <div className='faculty-showcase-wrapper'>
              <div className='faculty-details-fasfd'>
                <div className='header-fads'>
                  <div
                    style={{
                      height: "100%",
                      width: "40%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className='profile-dasf'>
                      <img
                        src='https://www.aljazeera.com/wp-content/uploads/2022/01/Ragini-Das-Co-founder-leap.club_.jpg?resize=770%2C513'
                        alt=''
                      ></img>
                    </div>
                    <div className='faculty-desc-daf'>
                      <div> Shubham Baweja </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            height: "10px",
                            width: "10px",
                          }}
                          src='https://cdn-icons-png.flaticon.com/512/1040/1040230.png'
                          alt=''
                        ></img>
                        4.5 Instructor Rating
                      </div>
                    </div>
                  </div>

                  <Button
                    style={{
                      padding: "0px",
                      justifyContent: "flex-start",
                      width: "19%",
                      height: "40%",
                      background: "whitesmoke",
                      color: "blue",
                      textTransform: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                    variant='contained'
                  >
                    <div
                      style={{
                        background: "transparent",
                        borderRadius: "20px",
                        height: "100%",
                        width: "30px",
                        marginRight: "5px",
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                        src={playBtn}
                        alt=''
                      ></img>
                    </div>
                    <span
                      style={{
                        width: "70%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      Watch Intro Video
                    </span>
                  </Button>
                </div>
                <div
                  className='courses'
                  style={{
                    width: "100%",
                    height: "70%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {courses.map((elem, index) => {
                    return (
                      <li
                        key={`courses-${index}`}
                        style={{
                          margin: "10px",
                          flexDirection: "column",
                          height: "80%",
                          width: "170px",
                          display: "flex",
                          fontSize: "20px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          background: `
                          url(${elem.image})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <div
                          style={{
                            height: "30%",
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "white",
                            background: `linear-gradient(
                              180deg,
                              rgba(245,245,245, 0) 0%,
                              rgba(245, 245, 249, 0.2) 20%,
                              rgba(0, 0, 0, 0.5) 100%
                            )`,
                          }}
                        >
                          {elem.name}
                        </div>
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className='wrapper'>
            <div className='footer-wrapper'>
              <div className='footer-column'>
                <h1>
                  <span>Doubt</span>
                  <span
                    style={{
                      borderBottom: "solid 2px green",
                    }}
                  >
                    Nix
                  </span>
                </h1>
                <div className='brand-text'>
                  DoubtNix Edu Solutions Pvt. Ltd.{" "}
                </div>
                <div className='address'>
                  {" "}
                  1st &amp; 2nd Floor, Mangalam Building,
                  <br /> Plot No. 273, Sector 10, Pitampura,
                  <br /> New Delhi - 110055{" "}
                </div>
                <Link to='mailto:support@DoubtNix.com'>
                  support@DoubtNix.com
                </Link>
                <div>
                  Toll Free:<Link to='tel:18008330800'>1800 000 0000</Link>
                </div>
                <div>Office Hours: 10 AM to 10 PM (all 7 days)</div>
              </div>
              <div className='footer-column'>
                <h4>Company</h4>
                <div className='category-item'>
                  <Link to='/about-us' target='_self'>
                    About us
                  </Link>
                  <Link to='/careers' target='_self'>
                    Careers{" "}
                    <span
                      className='badge-dark-fill'
                      style={{ marginLeft: "5px" }}
                    >
                      {" "}
                      We are hiring
                    </span>
                  </Link>
                  <Link to='/teach' target='_blank'>
                    Teach Online on DoubtNix
                  </Link>
                  <Link to='/partners' target='_self'>
                    Partners
                  </Link>
                  <Link to='/news' target='_self'>
                    Media
                  </Link>
                  <Link to='/sitemap' target='_self'>
                    Sitemap
                  </Link>
                </div>
              </div>
              <div className='footer-column'>
                <h4>Products</h4>
                <div className='category-item'>
                  <Link to='/online-test-series' target='_self'>
                    Test Series
                  </Link>
                  <Link
                    routerlink='/free-live-tests-and-quizzes'
                    to='/free-live-tests-and-quizzes'
                  >
                    Live Tests and Quizzes
                  </Link>
                  <Link routerlink='/pass' to='/pass'>
                    DoubtNix Pass
                  </Link>
                  <Link to='/videos' target='_self'>
                    Online Videos
                  </Link>
                  <Link to='/practice-questions' target='_self'>
                    Practice
                  </Link>
                  <Link routerlink='/free-live-classes' to='/free-live-classes'>
                    Live Classes
                  </Link>
                  <Link to='/blog/' target='_self'>
                    Blog
                  </Link>
                  <Link to='/referrals' target='_self'>
                    Refer &amp; Earn
                  </Link>
                  <Link
                    to='https://DoubtNix.com/promos/mock-test-book.html'
                    target='_self'
                  >
                    Books
                  </Link>
                  <Link
                    className=''
                    to='/government-exam-calendar'
                    target='_self'
                  >
                    {" "}
                    Exam Calendar
                  </Link>
                  <Link
                    className=''
                    to='/gk-and-current-affairs'
                    target='_self'
                  >
                    {" "}
                    GK &amp; CA
                  </Link>
                  <Link to='/teachers-training-program' target='_blank'>
                    {" "}
                    Teacher Training Program
                  </Link>
                  <Link
                    to='https://DoubtNix.com/promos/sales-training-program.html'
                    target='_self'
                  >
                    {" "}
                    Sales Training Program
                  </Link>
                  <Link to='/doubts' target='_blank'>
                    Doubts
                  </Link>
                </div>
              </div>
              <div className='footer-column'>
                <h4>Our Apps</h4>
                <ul className='category-item our-apps'>
                  <li className='flex-icon' style={{ padding: "10px 0" }}>
                    <div className='flex-icon__img'>
                      <svg className='mr-3' height='30' width='30'></svg>
                    </div>
                    <div className='flex-icon__content'>
                      <div>DoubtNix App</div>
                      <Link
                        className='text-brand'
                        to='https://DoubtNix.app.link/d2djnh0Yr6'
                      >
                        Download now
                      </Link>
                    </div>
                  </li>
                  <li className='flex-icon' style={{ paddingBottom: "10px" }}>
                    <div className='flex-icon__content'>
                      <div className='mt-0'>Current Affairs</div>
                      <Link
                        className='text-brand'
                        to='https://DoubtNix.com/u/fmd'
                      >
                        Download now
                      </Link>
                    </div>
                  </li>
                </ul>
                <h4>Follow us on</h4>

                <ul className='social'>
                  <li>
                    <i className='fa fa-facebook' aria-hidden='true'></i>
                  </li>
                  <li>
                    <i className='fa fa-twitter' aria-hidden='true'></i>
                  </li>
                  <li>
                    <i className='fa fa-instagram' aria-hidden='true'></i>
                  </li>

                  <li>
                    <i className='fa fa-github' aria-hidden='true'></i>
                  </li>
                  <li>
                    <i className='fa fa-pied-piper' aria-hidden='true'></i>
                  </li>
                </ul>
              </div>
            </div>
            <hr className='divider' />
            <div className='copyright-wrapper'>
              <div className='copyright'>
                Copyright © 2014-2021 DoubtNix Edu Solutions Pvt. Ltd.: All
                rights reserved
              </div>
              <Link to='/acceptable-use-policy' target='_self'>
                User Policy
              </Link>
              <Link to='/terms-of-service' target='_self'>
                Terms
              </Link>
              <Link to='/privacy-policy' target='_self'>
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Home);
