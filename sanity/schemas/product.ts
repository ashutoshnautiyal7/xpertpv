export default {
  name: 'product',
  type: 'document',
  title: 'XplorePV',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
    },
    {
    name: 'slug',
    type: 'slug',
    title: 'Product Slug',
    options: {
      source: 'name',
    }
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
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
