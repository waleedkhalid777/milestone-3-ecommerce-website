import { defineField,defineType } from "sanity";


export const Products = defineType({
    name: "product",
    title: "products",
    type: "document",
    fields: [
        defineField({
          name:"name",
          title:"Name",
          type:"string"

        }),
        {
          name:"slug",
          title:"slug",
          type:"slug",
          options:{source:'name'}
        },

       


        {
          name:"images",
          title:"Images",
          type:"array",
          of:[{
            type:'image',
            title: 'Image',
            options: {
              hotspot: true // Allows image cropping
            }
          
          }]
        },


        {
          name:"description",
          title:"description",
          type:"string",
          
        },

        {
          name:"price",
          title:"price",
          type:"number"
      
        }
    ]
})