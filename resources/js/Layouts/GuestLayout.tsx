import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col pt-6 sm:pt-0 bg-gray-100">
            <div className="mt-6 px-6 py-4 bg-white">
                {children}
            </div>
        </div>
    );
}
