import React from "react";

function Courses() {
  let courses = [
    {
      name: "Class 6th to 10th",
      image:
        "https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/02/Study-Tips-to-Become-a-Better-Test-Taker-Florida-Career-College.jpg",
      numberOfCourses: "50+",
    },

    {
      name: "Class 11th to 12th",
      image:
        "https://i0.wp.com/academiamag.com/wp-content/uploads/2021/12/most-effective-way-to-study-according-to-science.jpg",
      numberOfCourses: "50+",
    },

    {
      name: "Humanities",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Head_Platon_Glyptothek_Munich_548.jpg/640px-Head_Platon_Glyptothek_Munich_548.jpg",
      numberOfCourses: "200+",
    },

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
      name: "Marketing",
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/MarketingPlanEx_resized-583690554.jpg",
      numberOfCourses: "80+",
    },

    {
      name: "Product Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrumZDtnSeO7X48ACQ5nXeYa7yILJnXIpXiw&usqp=CAU",
      numberOfCourses: "90+",
    },
  ];

  return (
    <div
      className="asdfg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        height: "70%",
        width: "80%",
      }}
    >
      {courses.map((elem) => {
        return (
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              flexDirection: "column",
              height: "300px",
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "180px",
                width: "190px",
                border: "10px",
                overflow: "hidden",
              }}
            >
              <img
                id="char"
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                src={elem.image}
              ></img>
            </div>
            <div
              style={{
                height: "20%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
                fontSize: "19px",
              }}
            >
              {elem.name}
            </div>
            <div
              style={{
                height: "20%",
                display: "flex",
                justifyContent: "center",
                fontWeight: "700",
                color: "gray",
                fontSize: "14px",
                marginTop: "-14px",
                width: "20%",
              }}
            >
              {elem.numberOfCourses + "Courses"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
