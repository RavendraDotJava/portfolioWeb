import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar";
import Bio from "./Bio";
import Project from "./Projects";
import Footer from "./Footer";
import Achievements from "./Achievements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Bio />
    <div className="text-center lead display-5 my-5 ">Projects</div>
    <div className="container text-center d-flex justify-content-center ">
      <Project
        image="https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ"
        title="WeatherWebApp "
        subtitle="J2EE , JSP ,Servlet ,RestApi"
        cardtext=" A Simple Weather Web App Using JSP , RestApi and Tomcat Server.The user can check the condition of present day and Temperature,
            humidity, windspeed Etc.."
      />
      <Project
        image="https://www.nicepng.com/png/detail/246-2466222_school-management-system-school-management-system-png.png"
        title="Student Management System"
        subtitle="Java Core, J2EE ,MYSQL"
        cardtext="A Student Management System (SMS) is a solution tool meant to collect, store, and manage all data created by a School/college, including a student's grades, attendance, interpersonal activity records, and so on."
      />
      <Project
        image="https://www.nicepng.com/png/detail/246-2466222_school-management-system-school-management-system-png.png"
        title="User Registration & login Module"
        subtitle="JSP, MYSQL, HTML CSS, Bootstrap"
        cardtext="User registration and login using j2EE and bootstrap html and css."
      />
    </div>
    <Achievements />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
