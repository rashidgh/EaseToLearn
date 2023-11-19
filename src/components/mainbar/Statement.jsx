import React from "react";
import styles from "./mainBar.module.css";

const Statement = () => {
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
                <label htmlFor="name">
                  1.Tell me about a time you were asked to do something you had
                  never done before.how did you react? What did you learn?
                </label>
                <input
                  style={{ height: "50px", fontSize: "20px" }}
                  type="text"
                  id="name"
                  placeholder="Enter a description for long answer"
                />
              </div>
              <div>
                <label htmlFor="email">
                  2.Tell me about the last time something significan't didn't go
                  according to plan at work. What was your role? What was the
                  outcome?
                </label>
                <input
                  style={{ height: "50px", fontSize: "20px" }}
                  type="text"
                  id="email"
                  placeholder="Enter a description for long answer"
                />
              </div>
              <div>
                <label htmlFor="dob">
                  3.What are the three things that are most important to you ina
                  job?
                </label>
                <input
                  style={{ height: "50px", fontSize: "20px" }}
                  type="text"
                  id="dob"
                  placeholder="Enter a description for long answer"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Statement;
