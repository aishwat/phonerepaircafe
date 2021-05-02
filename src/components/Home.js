import React from "react";
import { Fragment } from "react";
import Contact from "./Contact";
import Intro from "./Intro";

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <Contact/>
      {/* <Chip label="For speaker queries and mentorship, please reach out to me at ExecAmit@gmail.com" /> */}
    </Fragment>
  );
};

export default Home;
