import {  groq } from 'next-sanity'

import { createClient } from '@sanity/client';


export function getBlogs() {

   const client = createClient({
       
       projectId: 'jlw3vxff',
       dataset: 'production',
       apiVersion: '2023-05-24',
    //    token: process.env.SANITY_API_TOKEN || "skCcxkqxe78bf0vD17F37gpCKsAa7R1wUzb1jyM5rUWNvCtnnOYP8DBVQiyTqDdS84giyNEi7S7GIYHIDGOiTc1BsDxtGiYVjTD29v8M21aXnP9zIxFhOhtPdSDxNnQB8bfbb4WIe7pVdNXmF0drUa5chU1pYFpqONRwEyU0qCwMxLhE6USh"
       
   }) ; 
    
   return client.fetch(
       groq`*[_type == "product"]| order(_createdAt desc) {
        _id,
        name,
        description,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`,
       

   )
}


export async function getBlog(slug: string) {

   const client = createClient({
       
    projectId: 'jlw3vxff',
    dataset: 'production',
    apiVersion: '2023-05-24',
      
       
   }) ; 
    
   const data  = await  client.fetch(
       
       groq`*[_type == 'product' && slug.current == $slug][0]{
        _id,
        name,
        images,
        description,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
       }`,

       { slug }
   ); 

   return data; 

}




export function getCategories() {

   const client = createClient({
       
       projectId: 'jlw3vxff',
       dataset: 'production',
       apiVersion: '2023-05-24',
    //    token: process.env.SANITY_API_TOKEN || "skCcxkqxe78bf0vD17F37gpCKsAa7R1wUzb1jyM5rUWNvCtnnOYP8DBVQiyTqDdS84giyNEi7S7GIYHIDGOiTc1BsDxtGiYVjTD29v8M21aXnP9zIxFhOhtPdSDxNnQB8bfbb4WIe7pVdNXmF0drUa5chU1pYFpqONRwEyU0qCwMxLhE6USh"
       
   }) ; 
    
   return client.fetch(
       groq`*[_type == "category"] | order(_createdAt desc) {
        name, 
        "slug": slug.current,
        image, 
        description
      }`,
       

   )
}


export function getTestimonials() {

   const client = createClient({
       
       projectId: 'jlw3vxff',
       dataset: 'production',
       apiVersion: '2023-05-24',
    //    token: process.env.SANITY_API_TOKEN || "skCcxkqxe78bf0vD17F37gpCKsAa7R1wUzb1jyM5rUWNvCtnnOYP8DBVQiyTqDdS84giyNEi7S7GIYHIDGOiTc1BsDxtGiYVjTD29v8M21aXnP9zIxFhOhtPdSDxNnQB8bfbb4WIe7pVdNXmF0drUa5chU1pYFpqONRwEyU0qCwMxLhE6USh"
       
   }) ; 
    
   return client.fetch(
       groq`*[_type == "testimonial"]| order(_createdAt desc) {
        _id,
        name,
        description,
          "slug": slug.current,
          "imageUrl": images[0].asset->url
      }`,
       

   )
}
