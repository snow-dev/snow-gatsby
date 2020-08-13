/** Created by github.com/snow-dev: 04/07/20 - titor **/

import React from "react";
import { css } from "@emotion/core";

export default function Header(props) {
  return <h1 css={css` display: inline-block; border-bottom: 1px solid;`}> { props.headerText } </h1>
}