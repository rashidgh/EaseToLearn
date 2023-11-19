import React, { useContext } from "react";
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/SideBar";
import DetailsColl from "./mainbar/DetailsColl";
import DocumentsColl from "./mainbar/DocumentsColl";
import Statement from "./mainbar/Statement";
import Interview from "./mainbar/Interview";
import { Sender } from "./Context";

const Main = () => {
  let { state } = useContext(Sender);
  console.log(state);
  return (
    <div>
      <NavBar />
      <div className="mainBlock">
        <SideBar />

        {state == "details" ? (
          <DetailsColl />
        ) : state == "documents" ? (
          <DocumentsColl />
        ) : state == "statement" ? (
          <Statement />
        ) : state == "interview" ? (
          <Interview />
        ) : (
          <DetailsColl />
        )}
      </div>
    </div>
  );
};

export default Main;
