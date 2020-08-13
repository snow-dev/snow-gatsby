/** Created by github.com/snow-dev: 12/08/20 - titor **/
import Container from "../components/container"
import React from "react"
import { graphql } from "gatsby"

export default function MyFiles({ data }) {
  console.log(data);
  
  return (
    <Container>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
          </thead>
          <tbody>
          {
            data.allFile.edges.map(({ node } , index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export const query = graphql `
    query {

        allFile(sort: {fields: [birthtime], order: DESC}) {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`

