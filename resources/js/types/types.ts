export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    views: number;
    thumbs_up: number;
    thumbs_down: number;
    created_at: string;
    updated_at: string;
    user: {
        id: number;
        name: string;
    };
    category?: {
        id: number;
        name: string;
    };
    tags: {
        id: number;
        name: string;
    }[];
    tag: {
        id: number;
        name: string;
    };
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    // Add other pagination-related properties as needed
}

export interface PageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
}

export interface Category {
    id: number;
    name: string;
}

export interface Tag {
    id: number;
    name: string;
}
