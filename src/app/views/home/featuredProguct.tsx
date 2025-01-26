"use client";

import React from "react";
import Image from "next/image";

type Product = {
    id: string;
    name: string;
    image: string;
    price: number;
    highlight?: boolean; // Indicates if the product supports specific initiatives
};

const products: Product[] = [
    {
        id: "1",
        name: "Eco-Friendly T-Shirt",
        image: "/images/Tshirt.jpg",
        price: 25.99,
        highlight: true,
    },
    {
        id: "2",
        name: "Sweatshirt",
        image: "/images/maleHoodie.jpg",
        price: 15.49,
    },
    {
        id: "3",
        name: "Branded Tote Bag",
        image: "/images/Tshirt.jpg",
        price: 10.99,
    },
    {
        id: "4",
        name: "Custom Hoodie",
        image: "/images/maleHoodie.jpg",
        price: 45.0,
        highlight: true,
    },
];

const handleViewAll = () => {
    // Redirect to the products page
    console.log("Navigating to products page...");
};

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-12 px-6 sm:px-12">
            <div className="container max-w-7xl mx-auto ">
                {/* Section Title */}
                <h2 className="text-3xl font-heading font-bold text-center mb-8">Featured Products</h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`rounded-lg border p-4 shadow-sm hover:shadow-lg transition-shadow 
                                ${product.highlight ? "border-accentGreen bg-accentGreen/10" : "border-gray-200 bg-white"}`}
                        >
                            <div className="relative w-full h-48 mb-4">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="100%"
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Product Name */}
                            <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>

                            {/* Product Price */}
                            <p className="text-primary font-semibold text-lg mb-2">
                                ${product.price.toFixed(2)}
                            </p>

                            {/* Highlight Badge */}
                            {product.highlight && (
                                <p className="mt-2 text-sm text-accentGreen font-medium">
                                    Supports a specific initiative!
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <button
                        onClick={handleViewAll}
                        className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-all"
                    >
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;