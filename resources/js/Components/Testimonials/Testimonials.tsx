import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

const Testimonials = () => {
    return (
        <div className="w-full">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-y-4 md:flex-row justify-between w-[90%]">
                    <h3 className="md:text-4xl text-2xl font-extrabold">
                        What People Say About Us
                    </h3>
                    <button
                        type="button"
                        className="border-2 border-[#02789e] px-8 py-5 font-medium hover:text-white text-[#14151b] hover:bg-[#02789e] bg-white rounded-lg text-center cursor-pointer mb-8"
                    >
                        Explore Our Work
                    </button>
                </div>

                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-[#02789e]"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900">
                                "Their work was impeccable. Everything was done
                                on time and they even let me share my ideas on
                                the designs, colors and fonts to use on my
                                website."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://mwangikanothe.com/build/assets/profile-default-b1fa350e.jpg"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-900 ">
                                <div className="pr-3 font-medium text-gray-900">
                                    Amos Wako
                                </div>
                                <div className="pl-3 text-sm font-light text-[#02789e]">
                                    Customer
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Testimonials;
