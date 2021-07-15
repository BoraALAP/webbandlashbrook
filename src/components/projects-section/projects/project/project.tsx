import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import { IProjectProps } from "../../../../contracts/projects/project/iproject-props"
import { ITag } from "../../../../contracts/tags/tag/itag"
import Tag from "../../tags/tag/tag"

const Project: FunctionComponent<IProjectProps> = ({ project }) => {
  console.log(project)

  return (
    <Link className="project-card" to={"/project/" + project.slug.current}>
      <GatsbyImage
        image={project.mainImage.childImageSharp.gatsbyImageData}
        className="project-image"
      />
      <div className="project-content-container">
        <div className="project-text-container">
          <div className="project-name">{project.title}</div>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-tags-container">
          {project.tags.map((tag: ITag) => (
            <Tag key={tag._id} tag={tag} toggleTagState={null} />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project
