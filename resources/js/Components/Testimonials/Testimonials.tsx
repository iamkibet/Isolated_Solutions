import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { Star, Quote } from "lucide-react";

// ==================== Component Constants ====================
const TESTIMONIALS = [
    {
        quote: "Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website.",
        author: "Amos Wako",
        role: "Business Owner",
        initials: "AW",
        color: "red",
        rating: 5,
    },
    {
        quote: "Exceptional service! The team delivered a robust inventory system that streamlined our operations. Highly professional and responsive.",
        author: "Sarah Mwangi",
        role: "Operations Manager",
        initials: "SM",
        color: "blue",
        rating: 5,
    },
    {
        quote: "Working with Isolated Solutions was a game-changer. They transformed our outdated systems into modern, efficient solutions.",
        author: "David Omondi",
        role: "IT Director",
        initials: "DO",
        color: "purple",
        rating: 5,
    },
    {
        quote: "Their mobile app development expertise is outstanding. PesaPlan has helped us manage our finances effortlessly.",
        author: "Grace Chebet",
        role: "Small Business Owner",
        initials: "GC",
        color: "green",
        rating: 5,
    },
];

// ==================== Main Component ====================
const Testimonials = () => {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <MaxWidthWrapper>
                <div className="px-4 md:px-0">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Star className="w-4 h-4" />
                            Client Testimonials
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6 md:p-8"
                            >
                                {/* Quote Icon */}
                                <Quote className="w-8 h-8 text-red-500 mb-4" />
                                
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="mb-6">
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        "{testimonial.quote}"
                                    </p>
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                                        testimonial.color === 'red' ? 'bg-red-600' :
                                        testimonial.color === 'blue' ? 'bg-blue-600' :
                                        testimonial.color === 'purple' ? 'bg-purple-600' :
                                        'bg-green-600'
                                    }`}>
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Testimonials;
