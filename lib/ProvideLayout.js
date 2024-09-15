"use client";

import React, { Fragment } from "react";
import "../styles/font.css";
import GlobalStyles from "../styles/GlobalStyles";

const ProvideLayout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};

export default ProvideLayout;
