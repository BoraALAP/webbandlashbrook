import { graphql, useStaticQuery } from "gatsby"
import { IGetProjectsResponse } from "../../contracts/projects/iget-projects-response"

export const GetAllProjects = () => {
  const projects: IGetProjectsResponse = useStaticQuery(
    graphql`
      query {
        allSanityProject(sort: { order: DESC, fields: _createdAt }) {
          nodes {
            _id
            title
            description
            slug {
              current
            }

            architect
            photographer
            mainImage {
              asset {
                fluid(maxWidth: 2000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            imagesGallery {
              asset {
                fluid(maxWidth: 1200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return projects
}
