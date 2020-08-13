import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  return (
    
    <Container>
      
      <div style={{ color: 'purple' }}>
        <Link to="/contact/">Contact</Link>
        
        <Header headerText="Amazing Pandas Eating Things" />
        
        <div>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                <Link to={node.fields.slug} css={css` text-decoration: none; color: inherit;`}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span css={css`color: #bbb`}>
                    - {node.frontmatter.date}
                  </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  
  );
}


export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
