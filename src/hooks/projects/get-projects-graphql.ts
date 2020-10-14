import { graphql, useStaticQuery } from "gatsby";
import { IGetProjectsResponse } from "../../contracts/projects/iget-projects-response";

export const GetAllProjects = () => {
  const projects: IGetProjectsResponse = useStaticQuery(
    graphql`
      query {
        allSanityProject {
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
                fluid(maxWidth: 1200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            imagesGallery {
              asset {
                  fluid(maxWidth: 2000) {
                    ...GatsbySanityImageFluid
                  }
                
              }
            }
          }
        }
      }
    `
  )
  return projects;
}