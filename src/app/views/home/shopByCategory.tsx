import Link from "next/link";
import Image from "next/image";

interface Category {
    name: string;
    image: string;
    link: string;
}

const categories: Category[] = [
    {
        name: "Men's Clothing",
        image: "/images/menCloth.jpg",
        link: "",
    },
    {
        name: "Women’s Clothing",
        image: "/images/womenCloth.jpg",
        link: "",
    },
    {
        name: "Accessories",
        image: "/test.jpeg",
        link: "",
    },
];

const ShopByCategory: React.FC = () => {
    return (
        <section className="py-16 px-6 sm:px-12">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl font-heading text-black font-bold text-center mb-8">
                    Shop by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={200}
                                height={200}
                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <Link
                                    href={category.link}
                                    className="text-white text-lg font-bold px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {category.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;