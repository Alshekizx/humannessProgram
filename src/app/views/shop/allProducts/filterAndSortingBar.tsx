import React, { useState } from "react";

interface FilterState {
    gender?: string;
    colors?: string[];
    sizes?: string[];
    [key: string]: string | string[] | undefined;
}

interface FilterAndSortingBarProps {
    onFilterChange: (filters: FilterState) => void;
    onSortChange: (sortOption: string) => void;
}

const FilterAndSortingBar: React.FC<FilterAndSortingBarProps> = ({
    onFilterChange,
    onSortChange,
}) => {
    const [gender, setGender] = useState<string>("");
    const [colors, setColors] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState<string>("");

    const availableColors = ["Red", "Blue", "Green", "Black", "White"];
    const availableSizes = ["S", "M", "L", "XL", "XXL"];
    const genderOptions = ["Men", "Women", "Unisex", "Kids"];

    const handleColorChange = (color: string) => {
        if (colors.includes(color)) {
            setColors(colors.filter((c) => c !== color));
        } else {
            setColors([...colors, color]);
        }
        handleFilterChange();
    };

    const handleSizeChange = (size: string) => {
        if (sizes.includes(size)) {
            setSizes(sizes.filter((s) => s !== size));
        } else {
            setSizes([...sizes, size]);
        }
        handleFilterChange();
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
        handleFilterChange();
    };

    const handleFilterChange = () => {
        onFilterChange({
            gender,
            colors,
            sizes,
        });
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSortOption(value);
        onSortChange(value);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Gender Filter */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="gender" className="font-semibold text-lg">
                    Gender
                </label>
                <select
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                >
                    <option value="">All</option>
                    {genderOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Color Filter */}
            <div className="flex flex-col space-y-2">
                <label className="font-semibold text-lg">Colors</label>
                <div className="flex flex-wrap gap-2">
                    {availableColors.map((color) => (
                        <button
                            key={color}
                            onClick={() => handleColorChange(color)}
                            className={`px-4 py-2 border rounded-full text-sm transition ${colors.includes(color)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {color}
                        </button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="flex flex-col space-y-2">
                <label className="font-semibold text-lg">Sizes</label>
                <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => handleSizeChange(size)}
                            className={`px-4 py-2 border rounded-full text-sm transition ${sizes.includes(size)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sorting Options */}
            <div className="flex flex-col space-y-2">
                <label htmlFor="sort" className="font-semibold text-lg">
                    Sort By
                </label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                >
                    <option value="">Select</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="bestsellers">Bestsellers</option>
                    <option value="customerRatings">Customer Ratings</option>
                    <option value="newArrivals">Newest Arrivals</option>
                </select>
            </div>

            {/* Apply Filters Button */}
            <div className="flex justify-between items-center">
                <button
                    onClick={handleFilterChange}
                    className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                >
                    Apply Filters
                </button>
            </div>

            {/* Clear All Button */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setGender("");
                        setColors([]);
                        setSizes([]);
                        setSortOption("");
                        handleFilterChange();
                    }}
                    className="w-full text-blue-500 py-3 rounded-md hover:text-blue-600 transition"
                >
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default FilterAndSortingBar;