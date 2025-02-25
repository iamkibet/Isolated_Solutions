import React from "react";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mx-auto w-full max-w-screen-xl px-3 md:px-8">
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
