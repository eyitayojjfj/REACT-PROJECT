
import React from 'react'
import BootstrapCard from './BootstrapCard';


const ProductList = () => {
    const style = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "18px",
        padding: "28px",
        
    }
    const laptops = [
        {
          id: 1,
          title: "Apple MacBook Pro 16",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/7569103/1.jpg?1809",
          description:
            "Apple MacBook Pro with M1 Pro chip, 16-inch Retina display, 16GB RAM, 512GB SSD.",
          price: 2499.99,
        },
        {
          id: 2,
          title: "Dell XPS 13",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/3648192/1.jpg?9563",
          description:
            "Dell XPS 13 with Intel Core i7, 13.4-inch FHD display, 16GB RAM, 512GB SSD.",
          price: 1399.99,
        },
        {
          id: 3,
          title: "HP Spectre x360",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/3747141/1.jpg?4481",
          description:
            "HP Spectre x360 with Intel Core i7, 15.6-inch 4K UHD display, 16GB RAM, 1TB SSD.",
          price: 1799.99,
        },
        {
          id: 4,
          title: "Lenovo ThinkPad X1 Carbon",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/3747141/1.jpg?4481",
          description:
            "Lenovo ThinkPad X1 Carbon with Intel Core i7, 14-inch FHD display, 16GB RAM, 512GB SSD.",
          price: 1599.99,
        },
        {
          id: 5,
          title: "Asus ROG Zephyrus G14",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/7636902/1.jpg?2719",
          description:
            "Asus ROG Zephyrus G14 with AMD Ryzen 9, 14-inch QHD display, 16GB RAM, 1TB SSD.",
          price: 1499.99,
        },
        {
          id: 6,
          title: "Acer Swift 3",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/074218/1.jpg?7936",
          description:
            "Acer Swift 3 with AMD Ryzen 7, 14-inch FHD display, 8GB RAM, 512GB SSD.",
          price: 749.99,
        },
        {
          id: 7,
          title: "Microsoft Surface Laptop 4",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/074218/1.jpg?7936",
          description:
            "Microsoft Surface Laptop 4 with Intel Core i7, 13.5-inch PixelSense display, 16GB RAM, 512GB SSD.",
          price: 1299.99,
        },
        {
          id: 8,
          title: "Razer Blade 15",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/2367101/1.jpg?9545",
          description:
            "Razer Blade 15 with Intel Core i7, 15.6-inch FHD display, 16GB RAM, 1TB SSD.",
          price: 1999.99,
        },
        {
          id: 9,
          title: "LG Gram 17",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/3434701/1.jpg?2140",
          description:
            "LG Gram 17 with Intel Core i7, 17-inch WQXGA display, 16GB RAM, 1TB SSD.",
          price: 1699.99,
        },
        {
          id: 10,
          title: "Samsung Galaxy Book Pro",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/3434701/1.jpg?2140",
          description:
            "Samsung Galaxy Book Pro with Intel Core i7, 15.6-inch AMOLED display, 16GB RAM, 512GB SSD.",
          price: 1199.99,
        },
      ];
    
    console.log(laptops);
    
  return (
    <div>
        <h1>Product List Goes Here</h1>
        <div style={style}>
         {laptops.map((product) => (
          <BootstrapCard productImg={product.imgUrl} title={product.title}
          description={product.description} price={product.price}/>
         ))}
         
        </div>
    </div>
  )
}

export default ProductList