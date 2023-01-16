import React from "react";
const About = () => (
  <div>
    <h2 className="populr">About us</h2>
    <p className="landing3">
      Looking for an easy and convenient way to book appointments with your
      doctor?
      <br />
      Well, look no further!
      <br />
      Our app, Doctor Appointments, is here to make the process of scheduling
      and managing appointments a breeze.
      <br />
      No more phone tag or long wait times - simply book an appointment at your
      convenience and have all your medical history at your fingertips.
    </p>
    <div className="part3">
      <div className="part3img">
        <img src="../happy.png" alt="" />
      </div>
      <div className="part3t">
        <div className="part3title tproduct">
          <h2>Why you should choose us.</h2>
          <p className="recomendation-dsn">
            Doctor Appointments is a user-friendly and reliable platform that
            connects patients with their doctors.
            <br />
            Our platform allows you to easily book appointments, view and update
            your medical history, and communicate with your healthcare provider.
          </p>
        </div>
        </div>
    </div>
    <div id="about" className="container-fluid"></div>
    <div className="products">
      <div className="tproduct2">
        <h2>Our Values</h2>
      </div>
      <div className="card1">
        <div className="card1a">
          <div className="imgcard1ainfo">
            <h3>MISSION:</h3>
            <p>
              Our mission is to make the process of booking and managing medical
              appointments
              <br />
              easy and efficient for both patients and healthcare providers.
            </p>
          </div>
          </div>
        <div className="card1a">
          <div className="imgcard1ainfo">
            <h3>VISION:</h3>
            <p>
              Our vision is to revolutionize the way healthcare is accessed and
              delivered,
              <br />
              by making it more convenient and accessible for all.
            </p>
            </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;