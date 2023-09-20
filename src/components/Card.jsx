import React, { useState } from "react";

export default function Card() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const items = [
    {
      title: "Nike Air Max 90",
      description:
        "The Nike Air Max 90 is a classic sneaker that has been popular for decades.",
      price: 120,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Adidas Superstar",
      description:
        "The Adidas Superstar is a classic sneaker that has been popular for decades.",
      price: 100,
      inStock: false,
      image:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/7405c7a6fd79457797ffcbd2ebabb35a_9366/superstar-xlg-skor.jpg",
      category: "sneakers",
    },
    {
      title: "Vans Old Skool",
      description:
        "The Vans Old Skool is a classic sneaker that has been popular for decades.",
      price: 80,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Converse Chuck Taylor All Star",
      description:
        "The Converse Chuck Taylor All Star is a classic sneaker that has been popular for decades.",
      price: 60,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Puma Suede Classic",
      description:
        "The Puma Suede Classic is a classic sneaker that has been popular for decades.",
      price: 90,
      inStock: false,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Reebok Classic Leather",
      description:
        "The Reebok Classic Leather is a classic sneaker that has been popular for decades.",
      price: 70,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "New Balance 990",
      description:
        "The New Balance 990 is a classic sneaker that has been popular for decades.",
      price: 150,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Fila Disruptor",
      description:
        "The Fila Disruptor is a classic sneaker that has been popular for decades.",
      price: 110,
      inStock: false,
      image:
        "https://i8.amplience.net/t/jpl/jdse_product_list?plu=jd_557566_bl&qlt=85&exclusive=1&qlt=92&wid=363&hei=363&v=1&fmt=auto",
      category: "sneakers",
    },
    {
      title: "Asics Gel-Lyte III",
      description:
        "The Asics Gel-Lyte III is a classic sneaker that has been popular for decades.",
      price: 130,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Saucony Jazz Original",
      description:
        "The Saucony Jazz Original is a classic sneaker that has been popular for decades.",
      price: 100,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "sneakers",
    },
    {
      title: "Levi's 501",
      description:
        "The Levi's 501 is a classic pair of jeans that has been popular for decades.",
      price: 80,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
    {
      title: "Wrangler Texas",
      description:
        "The Wrangler Texas is a classic pair of jeans that has been popular for decades.",
      price: 70,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
    {
      title: "Lee Rider",
      description:
        "The Lee Rider is a classic pair of jeans that has been popular for decades.",
      price: 90,
      inStock: false,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
    {
      title: "Calvin Klein Straight",
      description:
        "The Calvin Klein Straight is a classic pair of jeans that has been popular for decades.",
      price: 120,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
    {
      title: "G-Star Raw 3301",
      description:
        "The G-Star Raw 3301 is a classic pair of jeans that has been popular for decades.",
      price: 150,
      inStock: true,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
    {
      title: "Diesel Larkee",
      description:
        "The Diesel Larkee is a classic pair of jeans that has been popular for decades.",
      price: 180,
      inStock: false,
      image: "https://via.placeholder.com/150",
      category: "jeans",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-4">
      <div className="flex justify-center mb-4">
        <button
          className={`mr-2 ${
            selectedCategory === "all"
              ? "bg-gray-300"
              : "bg-gray-200 hover:bg-gray-300"
          } rounded-lg px-4 py-2`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`mr-2 ${
            selectedCategory === "sneakers"
              ? "bg-gray-300"
              : "bg-gray-200 hover:bg-gray-300"
          } rounded-lg px-4 py-2`}
          onClick={() => setSelectedCategory("sneakers")}
        >
          Sneakers
        </button>
        <button
          className={`mr-2 ${
            selectedCategory === "jeans"
              ? "bg-gray-300"
              : "bg-gray-200 hover:bg-gray-300"
          } rounded-lg px-4 py-2`}
          onClick={() => setSelectedCategory("jeans")}
        >
          Jeans
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredItems.map(({ title, description, price, inStock, image }) => (
          <div key={title} className="border rounded-lg p-4 basis-1/5">
            <img src={image} alt={title} />
            <h2 className="font-medium">{title}</h2>
            <p className="text-gray-500">{description}</p>
            <span className="font-medium mr-4">{price}$</span>
            {inStock ? (
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 ml-4">
                Buy
              </button>
            ) : (
              <span className="text-red-500">Out of stock</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
