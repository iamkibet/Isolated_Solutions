import React from "react";

type RelatedPost = {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
    content: string;
    author: string;
    slug: string;
    date: string;
};

type Props = {
    relatedPosts: RelatedPost[];
};

const Aside: React.FC<Props> = ({ relatedPosts }) => {
   
    
    return (
        <aside
            aria-label="Related articles"
            className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
            <div className="px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-900">
                    Related Articles
                </h2>
                <div className="grid gap-y-12">
                    {relatedPosts?.slice(0, 3).map((relatedPost) => (
                        <article key={relatedPost.title} className="max-w-xs">
                            <h2>{relatedPost.title}</h2>
                            <p>{relatedPost.content}</p>
                        </article>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Aside;
