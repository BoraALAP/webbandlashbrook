export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subDetail",
      title: "Sub Detail",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "photographer",
      title: "Photographer",
      type: "string"
    },
    {
      name: "architect",
      title: "Architect",
      type: "string"
    },
    // {
    //   name: 'githubUrl',
    //   title: 'Github Url',
    //   type: 'url'
    // },
    // {
    //   name: 'siteUrl',
    //   title: 'Site Url',
    //   type: 'url'
    // },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
