export default {
    name: 'blog',
    type: 'document',
    title: 'Blogs',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
      name: 'slug',
      type: 'slug',
      title: 'blog Slug',
      options: {
        source: 'title',
      }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
       
    },
      {
          name: 'description',
          title: 'description',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Alternative text',
                  description: `Some of your visitors cannot see images, 
                    be they blind, color-blind, low-sighted; 
                    alternative text is of great help for those 
                    people that can rely on it to have a good idea of 
                    what\'s on your page.`,
                  options: {
                    isHighlighted: true
                  }
                }
              ]
            }
          ]
        },
    ],
  }
  