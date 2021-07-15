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
                gatsbyImageData(layout: FULL_WIDTH, formats: AUTO)
              }
            }
            # imagesGallery {
            #   asset {
            #     gatsbyImageData(layout: FULL_WIDTH, formats: AUTO)
            #   }
            # }
          }
        }
      }
    `
  )
  return projects
}
