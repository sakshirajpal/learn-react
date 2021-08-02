import React from "react";
import { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...'></img>
    </Fragment>
  );
};
export default Spinner;
