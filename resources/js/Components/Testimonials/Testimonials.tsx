import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

// ==================== Component Constants ====================
const TESTIMONIAL = {
    quote: `"Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website."`,
    author: {
        name: "Amos Wako",
        role: "Customer",
        avatar: "https://mwangikanothe.com/build/assets/profile-default-b1fa350e.jpg",
    },
};

// ==================== Sub-Components ====================
const QuoteIcon = () => (
    <svg
        className="h-12 mx-auto mb-6 text-red-500"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
        />
    </svg>
);

const TestimonialCard = () => (
    <figure className="max-w-3xl mx-auto">
        <QuoteIcon />
        <blockquote>
            <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                {TESTIMONIAL.quote}
            </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-8 space-x-4">
            <img
                className="w-10 h-10 rounded-full"
                src={TESTIMONIAL.author.avatar}
                alt={`${TESTIMONIAL.author.name} avatar`}
            />
            <div className="flex items-center divide-x divide-gray-300">
                <div className="pr-4 font-medium text-gray-900">
                    {TESTIMONIAL.author.name}
                </div>
                <div className="pl-4 text-sm font-light text-red-500">
                    {TESTIMONIAL.author.role}
                </div>
            </div>
        </figcaption>
    </figure>
);

const SectionHeader = () => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What People Say About Us
        </h2>
        <button
            type="button"
            className="px-8 py-4 border-2 border-red-500 text-red-500 font-medium rounded-lg 
               hover:bg-red-500 hover:text-white transition-all duration-300
               focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Explore our work portfolio"
        >
            Explore Our Work
        </button>
    </div>
);

// ==================== Main Component ====================
const Testimonials = () => {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="py-16 md:py-24"
        >
            <MaxWidthWrapper>
                <div className="w-full">
                    <SectionHeader />
                    <div className="px-4 py-12 md:py-16 bg-gray-50 rounded-2xl">
                        <TestimonialCard />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Testimonials;
