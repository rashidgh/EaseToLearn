import React from "react";
import styles from "./mainBar.module.css";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";

const Interview = () => {
  return (
    <section className={styles.detailsBlock}>
      <article>
        <div className={styles.preview}>
          <h3>Preview</h3>
          <p>You will be Customize the fields in the later stage</p>
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
                <label htmlFor="name">1.Email*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Attach file upto 5kb"
                />
              </div>
              <div>
                <label htmlFor="email">2.Location</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Attach file upto 5kb"
                />
              </div>
              <div className={styles.dob}>
                <label htmlFor="dob">3.Interview Date</label>
                <input
                  style={{ width: "200px" }}
                  type="text"
                  id="dob"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.dateIcon}>
                  <BsCalendarDate />
                </span>
              </div>
              <div className={styles.dob}>
                <label htmlFor="contact">4.Interview Time</label>
                <input
                  style={{ width: "200px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.dateIcon}>
                  <MdOutlineAccessTime />
                </span>
              </div>
              <div>
                <label htmlFor="contact">4.Time Zone</label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
              </div>
              <div>
                <label htmlFor="contact">4.Interview Medium</label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Interview;
