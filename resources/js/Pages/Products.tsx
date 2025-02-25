import TopServices from "@/Components/TopServices";
import GuestLayout from "@/Layouts/GuestLayout";

const products = [
    {
        name: "Soko Magari",
        description:
            "A sleek, user-friendly platform for browsing and purchasing vehicles.",
        link: "/sokomagari",
        image: "https://github.com/iamkibet/assets/blob/main/sokomagari.png?raw=true",
    },
];

const Products = () => {
    return (
        <GuestLayout>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900">
                        Our Products
                    </h1>
                    <p className="text-xl text-center text-gray-600 mb-16">
                        Innovative solutions driving digital transformation
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="flex flex-col items-center text-center p-6 h-full">
                                    <div className="mb-6 space-y-4">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                                    >
                                        View more
                                    </a>

                                    <div className="w-full overflow-hidden rounded-xl">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-contain transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <TopServices />
        </GuestLayout>
    );
};

export default Products;
