import React, { useEffect, useState } from "react";
import students from "../../assets/images/students.svg";
import coursess from "../../assets/images/coursess.svg";
function FacultyCard() {
  let values = [
    {
      id: 1,
      name: "Harish Verma",
      subject: "Physics",
      image: "https://www.jagranimages.com/images/12_11_2017-hc-verma-pat.jpg",
      testimonial:
        "There is no greater joy than watching beautiful testimonials from the students of people acheiving goals and dreams ",
      Rating: "4.8",
      Students: "3.2k+",
      courses: "150",
    },
    {
      id: 2,
      name: "Mary Cooper",
      subject: "Chemistry",
      image:
        "https://promys-india.org/wp-content/uploads/2020/02/Faculty-page-photo.jpg",
      testimonial:
        "There is no greater joy than watching beautiful testimonials from the students of people acheiving goals and dreams ",
      Rating: "4.8",
      Students: "3.2k+",
      courses: "150",
    },
    {
      id: 3,
      name: "Nivedita Murthy",
      subject: "English",
      image: "https://dilhot.files.wordpress.com/2014/10/f3677-swathi1.jpg",
      testimonial:
        "There is no greater joy than watching beautiful testimonials from the students of people acheiving goals and dreams ",
      Rating: "4.8",
      Students: "3.2k+",
      courses: "150",
    },
    {
      id: 4,
      name: "Mathhew Perry",
      subject: "CyberSecurity",
      image:
        "https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UY1200_CR88,0,630,1200_AL_.jpg",
      testimonial:
        "There is no greater joy than watching beautiful testimonials from the students of people acheiving goals and dreams ",
      Rating: "4.8",
      Students: "3.2k+",
      courses: "150",
    },
  ];

  let [data, setData] = useState([]);

  useEffect(() => {
    setData((data = values));
  });

  return (
    <>
      {data.map((elem) => {
        return (
          <li
            id={"f-card-" + elem.id}
            className="f-card-wrapper"
            style={{
              height: "220px",
              width: "400px",
              display: "inline-block",
              margin: "40px",
            }}
          >
            <span
              className="f-wrap"
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            >
              <div
                className="img-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "42%",
                  borderRadius: "20px 0px 0px 20px",
                }}
              >
                <img
                  src={elem.image}
                  style={{
                    borderRadius: "20px 0px 0px 20px",
                    height: "100%",
                    width: "100%",
                  }}
                ></img>
              </div>
              <div
                className="description"
                style={{
                  fontSize: "20px",
                  height: "100%",
                  width: "58%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  className="f-name"
                  style={{
                    margin: "0px",
                    marginTop: "20px",
                    height: "10%",
                    width: "80%",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  {elem.name}
                </h1>
                <h2
                  className="f-subject"
                  style={{
                    height: "10%",
                    width: "80%",
                    margin: "0px",
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    color: "blue",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {elem.subject}
                </h2>

                <h2
                  className="f-testimonial"
                  style={{
                    fontWeight: "400",
                    height: "55%",
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  {elem.testimonial}
                </h2>
                <hr style={{ width: "80%", margin: "10px" }} />
                <div
                  className="f-rating-banner"
                  style={{
                    width: "80%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="f-name"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      display: "flex",
                      width: "30%",
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          display: "flex",
                          width: "40%",
                          height: "100%",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          style={{
                            height: "10px",
                            width: "10px",
                          }}
                          src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
                        ></img>
                      </span>
                      <span
                        style={{
                          fontWeight: "800",
                          color: "#4f4e4e",
                          // alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          display: "flex",
                          width: "60%",
                          height: "100%",
                          flexDirection: "column",
                        }}
                      >
                        {elem.Rating}
                      </span>
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                      }}
                    >
                      Ratings
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "30%",
                      height: "100%",
                      flexDirection: "column",
                      fontSize: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="n-ofkads"
                      style={{
                        fontWeight: "800",
                        color: "#4f4e4e",
                        fontSize: "10px",
                        height: "50%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          height: "100%",
                          width: "50%",
                        }}
                      >
                        <img src={students}></img>
                      </span>
                      <span>{elem.Students}</span>
                    </div>
                    <div
                      style={{
                        marginTop: "4px",
                      }}
                    >
                      Students
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "30%",
                      height: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "50%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "80%",
                        }}
                      >
                        <img
                          style={{
                            height: "100%",
                            width: "80%",
                          }}
                          src={coursess}
                        ></img>
                      </span>
                      <span
                        style={{
                          fontWeight: "800",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "80%",
                          color: "#4f4e4e",
                        }}
                      >
                        {elem.courses}
                      </span>
                    </div>
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "10px",
                        marginTop: "4px",
                      }}
                    >
                      Classes Held
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </li>
        );
      })}
    </>
  );
}
export default FacultyCard;
