import { defineField, defineType } from "sanity";

export const List = defineType({
  name: 'List',
  title: 'Lists',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name', // Corrected to "Name" from "Title" for better clarity
      type: 'string',
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true, // Allows image cropping
          },
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
});
