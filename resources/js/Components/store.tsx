<div className="md:p-4 w-full shadow-lg rounded-lg m-10">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
        Contact Us
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
    </p>
    <form action="#" className="space-y-8">
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                Your email
            </label>
            <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="name@example.com"
                required
                onChange={(e) => {}}
            />
        </div>
        <div>
            <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Subject
            </label>
            <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                placeholder="Let us know how we can help you"
                required
            />
        </div>
        <div className="sm:col-span-2">
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                Your message
            </label>
            <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
            ></textarea>
        </div>
        <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-slate-50 hover:text-black rounded-lg sm:w-fit bg-[#02789e] hover:bg-slate-50 hover:border-2 border-[#02789e]"
        >
            Send message
        </button>
    </form>
</div>;
