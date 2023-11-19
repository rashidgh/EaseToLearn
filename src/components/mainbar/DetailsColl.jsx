import React from "react";
import styles from "./mainBar.module.css";
import { BsCalendarDate } from "react-icons/bs";

const DetailsColl = () => {
  return (
    <section className={styles.detailsBlock}>
      <article>
        <div className={styles.preview}>
          <h3>Preview</h3>
          <p>You will be Customize the fields in the last stage</p>
        </div>
        <div className={styles.form}>
          <div className={styles.name}>
            <h3>Name of the Enquire Form</h3>
            <p>One line description of the Form</p>
            <p className={styles.provide}>
              Provide the following Information to process your Application
            </p>
          </div>
          <div>
            <div>
              <div>
                <label htmlFor="name">1.Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
                />
              </div>
              <div>
                <label htmlFor="email">2.Email*</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Example-userid@gmail.com"
                />
              </div>
              <div className={styles.dob}>
                <label htmlFor="dob">3.Date of Birth</label>
                <input
                  style={{ width: "200px" }}
                  type="text"
                  id="dob"
                  placeholder="DD/MM/YY"
                />
                <span className={styles.dateIcon}>
                  <BsCalendarDate />
                </span>
              </div>
              <div>
                <label htmlFor="contact">4.Contact no</label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Enter your 10 digit contact no"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetailsColl;
