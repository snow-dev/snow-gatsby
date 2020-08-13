/** Created by github.com/snow-dev: 04/07/20 - titor **/
import React from "react"
import Container from "../components/container"
import styles from './about.module.css';
import { graphql } from 'gatsby';


const User = props => (
  <div className={styles.user}>
    <img src={props.acatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

// highlight-next-line
export default function About({data}) {
  return (
    <Container>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>CSS Modules are cool</p>
      
      <User username="Bob Smith"
            avatar="https://source.unsplash.com/random/400x200"
            excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
  
      <User username="Jon Snow"
            avatar="https://source.unsplash.com/random/400x200"
            excerpt="I'm Jon Snow, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      
    </Container>
  );
}

// highlight-start
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
// highlight-end