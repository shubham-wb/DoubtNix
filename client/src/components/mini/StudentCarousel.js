import React, { useEffect, useState, createRef } from "react";
import a from "../../assets/images/a.svg";
function StudentCarousel(props) {
  let index = props.data.value;
  let imageData = [
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://vidhilegalpolicy.in/wp-content/uploads/2021/01/Sakshi-Pawar-photo-1.jpg",
    "https://images.news18.com/ibnlive/uploads/2021/06/1624695153_1-1.jpg?impolicy=website&width=0&height=0",
    "https://gs-post-images.grdp.co/2022/3/bb63b37d8a461762f02e29ea0de58cc9c9ae58391b07b0bb142b9c608742f5ad-high.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
  ];

  let myRef = createRef();

  return (
    <>
      <div
        style={{
          width: "65%",
          height: "65%",
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "maxContent",
            height: "100%",
            width: "maxContent",
          }}
        >
          <div
            id='lkjh-1'
            style={{
              transform: `translateX(${props.data.next}px)`,
              height: "95%",
              width: "500px",
              marginRight: "10px",
            }}
          >
            {" "}
            <p>
              DoubtNix helped me a lot in this journey. Its Course quality is
              highly reliable. The level of questions prepared by them for the
              prelims and mains is at par with the real exam. Especially, its
              puzzle mania and data interpretation books helped me a lot to get
              a stronghold in these two sections.
            </p>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={a}
              alt=''
            ></img>
          </div>
          <div
            id='lkjh-2'
            style={{
              transform: `translateX(${props.data.next}px)`,
              height: "95%",
              width: "500px",
              marginRight: "10px",
            }}
          >
            <p>
              If you want to score well then only DoubtNix mock te Course give
              you confidence in the exam. When It comes to solving DoubtNix mock
              tests one must have a very high Coursetion level, which indirectly
              helps you to clear your exam.
            </p>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={a}
              alt=''
            ></img>
          </div>
          <div
            id='lkjh-3'
            style={{
              transform: `translateX(${props.data.next}px)`,
              height: "95%",
              width: "500px",
              marginRight: "10px",
            }}
          >
            <p>
              The mock tests actually helped me a lot for which I am really
              thankful to team. I would recommend those who are seriously
              looking for job in regulatory bodies to practice the questions as
              much as you can since these give you an edge above others as you
              have covered not only the topics but various questions that can be
              asked from those.
            </p>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={a}
              alt=''
            ></img>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "top",
          position: "relative",
          height: "30%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              filter: "grayscale(0.5)",
              transform: "translateY(20px) scale(0.8)",
            }}
            src={imageData[index]}
            alt=''
          ></img>
        </div>
        <div
          className='m'
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            marginLeft: "20px",
          }}
        >
          <img
            className='rtgs'
            style={{ height: "100%", width: "100%", borderRadius: "50%" }}
            src={imageData[index + 1]}
            alt=''
          ></img>
        </div>
        <div
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            marginLeft: "20px",
            transform: "translateY(20px) scale(0.8)",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              filter: "grayscale(0.5)",
            }}
            src={imageData[index + 2]}
            alt=''
          ></img>

          <div className='svg-wrapper'>
            <svg height='166' width='166' xmlns='http://www.w3.org/2000/svg'>
              <circle
                cx='83'
                cy='83'
                r='40'
                ref={myRef}
                id='shape'
                height='166'
                width='166'
              ></circle>
              <div className='text'>kW</div>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCarousel;
