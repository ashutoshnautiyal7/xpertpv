export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name of Category',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'category Slug',
      options: {
        source: 'name',
      },
    }, 
    {
      name: 'image',
      title: "Category  Image",
      type: 'image'
    },
    {
      name: 'description',
      title: "Category Description",
      type: 'string',
    }
  ],
}
