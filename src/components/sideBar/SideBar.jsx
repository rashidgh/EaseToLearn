import React, { useContext, useState } from "react";
import styles from "./side.module.css";
import  { Sender }  from "../Context";

const SideBar = () => {
  // let [state, setState] = useState();
  // console.log(state);
  let { state, setState } = useContext(Sender);
  // console.log(state);

  return (
    <section className={styles.sideBarBlock}>
      <article>
        <div>
          <div>
            <p></p>
          </div>
          <div className={styles.formBlock}>
            <h3>Link</h3>
            <span>
              Start creating a new form with wide option of the field available
            </span>
          </div>
        </div>

        <span className={styles.explore}>Explore The Following Templates:</span>

        <div
          style={{ border: state == "details" ? "1px solid blue" : "" }}
          onClick={() => setState("details")}
        >
          <div>
            <p
              style={{
                backgroundColor: state == "details" ? "lightBlue" : "",
              }}
            ></p>
          </div>
          <div className={styles.formBlock}>
            <h3>Details Collection</h3>
            <span>
              Collect Information from Candidates on their education work
              experience,contact no etc.
            </span>
          </div>
        </div>

        <div
          style={{ border: state == "documents" ? "1px solid blue" : "" }}
          onClick={() => setState("documents")}
        >
          <div>
            <p
              style={{
                backgroundColor: state == "documents" ? "lightBlue" : "",
              }}
            ></p>
          </div>
          <div className={styles.formBlock}>
            <h3>Document Collection</h3>
            <span>
              Save Time and efforts. explore this this template to find a set of
              questions.
            </span>
          </div>
        </div>
        <div
          style={{ border: state == "statement" ? "1px solid blue" : "" }}
          onClick={() => setState("statement")}
        >
          <div>
            <p
              style={{
                backgroundColor: state == "statement" ? "lightBlue" : "",
              }}
            ></p>
          </div>
          <div className={styles.formBlock}>
            <h3>Statement of Purpose</h3>
            <span>
              Start creating a new form with wide option of the field available
              available
            </span>
          </div>
        </div>
        <div
          style={{ border: state == "interview" ? "1px solid blue" : "" }}
          className="interview"
          onClick={() => setState("interview")}
        >
          <div>
            <p
              style={{
                backgroundColor: state == "interview" ? "lightBlue" : "",
              }}
            ></p>
          </div>
          <div className={styles.formBlock}>
            <h3>Interview Availability</h3>
            <span>
              Start creating a new form with wide option of the field available
              available
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SideBar;
