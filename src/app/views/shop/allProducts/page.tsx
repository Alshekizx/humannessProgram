"use client";

import { useState } from "react";
import AllProductsHeroSection from "./allProductHero";
import FilterAndSortingBar from "./filterAndSortingBar";
import ProductList from "./productList";

// Define the Product interface


// Define the Filters type
interface Filters {
    gender?: string;
    colors?: string[];
    sizes?: string[];
    [key: string]: string | string[] | undefined; // Allows additional filter keys with valid types
}

export default function AllProducts() {
    const [filters, setFilters] = useState<Filters>({});
    const [sortOption, setSortOption] = useState<string>("");

    const handleFilterChange = (newFilters: Filters) => {
        setFilters(newFilters);
        console.log("Filters updated:", newFilters);
    };

    const handleSortChange = (newSortOption: string) => {
        setSortOption(newSortOption);
        console.log("Sort option updated:", newSortOption);
    };



    return (
        <div>
            <AllProductsHeroSection />
            <div className="flex flex-col px-10 mt-20 lg:flex-row gap-6 ">
                <FilterAndSortingBar
                    onFilterChange={handleFilterChange}
                    onSortChange={handleSortChange}
                />
                <ProductList filters={filters} sortOption={sortOption} />
            </div>
        </div>
    );
}