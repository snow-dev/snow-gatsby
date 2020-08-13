/** Created by github.com/snow-dev: 04/07/20 - titor **/

import React from "react"
import containerStyles from './container.module.css';

export default function Container({ children }) {
  return (
    <div className={ containerStyles.container }>
      { children }
    </div>
  );
}