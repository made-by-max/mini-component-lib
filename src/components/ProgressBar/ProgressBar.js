/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
    "--padding": 0 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
    "--padding": 0 + "px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    // <ProgressBase
    //   style={styles}
    //   max={100}
    //   value={value}
    //   aria-valuenow={value}
    // ></ProgressBase>
    //
    <Wrapper>
      <ProgressBase
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></ProgressBase>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 8px;
  background-color: hsla(0, 0%, 50%, 0.15);
  border-radius: var(--borderRadius);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
`;

const ProgressBase = styled.div`
  /*height: var(--height);*/
  background-color: hsla(240, 80%, 60%, 1);
  height: 8px;
  width: var(--width);
  padding: var(--padding);
`;

export default ProgressBar;
