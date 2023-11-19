import React from "react";
import styles from "./mainBar.module.css";
import { MdOutlineAttachment } from "react-icons/md";

const DocumentsColl = () => {
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
              <div style={{ position: "relative" }}>
                <label htmlFor="name">1.10th Marksheet*</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="name"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="email">2.12th Marksheet*</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="email"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="dob">3.Graduation Marksheet</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="dob"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="contact">4.Offer Letter*</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="contact">4.Salary Slip*</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="contact">4.Bank Statement*</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="contact">Increment Letter(if any)</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <label htmlFor="contact">Others(if any)</label>
                <input
                  style={{ width: "160px", paddingLeft: "60px" }}
                  type="text"
                  id="contact"
                  placeholder="Attach file upto 5kb"
                />
                <span className={styles.attch}>
                  <MdOutlineAttachment />
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DocumentsColl;
