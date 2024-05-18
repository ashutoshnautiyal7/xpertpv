export default {
  name: 'testimonial',
  type: 'document',
  title: 'testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of testimonial',
    },
    {
      name: 'images',
      type: 'array',
      title: 'testimonial Image',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of testimonial',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'testimonial Slug',
      options: {
        source: 'name',
      },
    }
  ],
}
