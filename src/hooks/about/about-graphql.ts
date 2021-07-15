import { graphql, useStaticQuery } from "gatsby"
import { IGetAboutResponse } from "../../contracts/about/iget-about-response"

export const GetAbout = () => {
  const about: IGetAboutResponse = useStaticQuery(
    graphql`
      query {
        sanityAbout {
          title
          description
          mainImage {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, formats: AUTO)
            }
          }
        }
      }
    `
  )
  return about
}
