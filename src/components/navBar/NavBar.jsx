import React from "react";
import styles from "./navBar.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  return (
    <section className={styles.navBarBlock}>
      <div>
        <div className={styles.selection}>
          <p style={{ backgroundColor: "blue" }}></p>
          <span>Form Selection</span>
          <div></div>
          <span className={styles.correct}>
            <IoMdCheckmark />
          </span>
        </div>

        <div>
          <p></p>
          <span>Set up</span>
          <div></div>
        </div>
        <div>
          <p></p>
          <span>Form Creation</span>
          <div></div>
        </div>
        <div>
          <p></p>
          <span>Review</span>
        </div>
        <span className={styles.cross}>
          <RxCross2 />
        </span>
      </div>
    </section>
  );
};

export default NavBar;
