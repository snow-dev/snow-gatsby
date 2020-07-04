/** Created by github.com/snow-dev: 04/07/20 - titor **/

import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";


export default function Contact() {
  return (
    <div style={{color: 'teal'}}>
      <Link to="/">Home</Link>;
      <Header headerText="Contact" />
      <p> Send us a message!</p>
    </div>
  );
}