"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Filters {
    gender?: string;
    colors?: string[];
    sizes?: string[];
    [key: string]: string | string[] | undefined;
}

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
    isSale?: boolean;
    isLimitedEdition?: boolean;
}
interface ProductListProps {
    filters: Filters;
    sortOption: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Tshirts",
        imageUrl: "/images/Tshirt.jpg", // Correct path
        price: 29.99,
        rating: 4,
        reviews: 150,
        isNew: true,
        isSale: false,
    },
    {
        id: 2,
        name: "Hoodies",
        imageUrl: "/images/maleHoodie.jpg", // Correct path
        price: 49.99,
        rating: 5,
        reviews: 200,
        isSale: true,
        isLimitedEdition: true,
    },
    {
        id: 3,
        name: "Eco Tote Bag",
        imageUrl: "/images/Tshirt.jpg", // Correct path
        price: 19.99,
        rating: 4.5,
        reviews: 120,
        isNew: false,
        isSale: true,
    },
    {
        id: 4,
        name: "Custom Cap",
        imageUrl: "/images/maleHoodie.jpg", // Correct path
        price: 15.99,
        rating: 4,
        reviews: 50,
        isLimitedEdition: true,
    },
];

const ProductList: React.FC<ProductListProps> = ({ filters, sortOption }) => {
    console.log("Filters:", filters);
    console.log("Sort option:", sortOption);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    return (
        <div className="container mx-auto px-4">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden bg-white"
                    >
                        <div className="relative">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-60 object-cover cursor-pointer"
                                onClick={() => console.log("Navigate to product details page")}
                                width={240}
                                height={240}
                            />
                            {product.isNew && (
                                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded">
                                    New
                                </span>
                            )}
                            {product.isSale && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
                                    Sale
                                </span>
                            )}
                            {product.isLimitedEdition && (
                                <span className="absolute bottom-2 right-2 bg-yellow-500 text-black text-xs font-semibold py-1 px-2 rounded">
                                    Limited Edition
                                </span>
                            )}
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
                            <div className="mt-2 text-sm text-gray-600 flex items-center space-x-1">
                                <span>{'★'.repeat(Math.floor(product.rating))}</span>
                                <span>({product.reviews} reviews)</span>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleQuickView(product)}
                                className="mt-2 w-full text-blue-600 underline"
                            >
                                Quick View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick View Modal */}
            {quickViewProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fade-in">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full transform transition-all scale-95">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-xl font-semibold text-gray-800">{quickViewProduct.name}</h2>
                            <button
                                onClick={handleCloseQuickView}
                                className="text-gray-500 text-2xl hover:text-gray-800"
                            >
                                &times;
                            </button>
                        </div>
                        <Image
                            src={quickViewProduct.imageUrl}
                            alt={quickViewProduct.name}
                            className="mt-4 w-full h-64 object-cover rounded-lg"
                            width={320}
                            height={320}
                        />
                        <p className="mt-4 text-xl font-bold text-gray-800">${quickViewProduct.price}</p>
                        <p className="mt-2 text-sm text-gray-600">
                            {'★'.repeat(Math.floor(quickViewProduct.rating))} ({quickViewProduct.reviews} reviews)
                        </p>
                        <div className="mt-4">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;