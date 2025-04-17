// 4. Breadcrumb.tsx
import React from 'react';
interface BreadcrumbProps {
    currentCategory: {
        main: string;
        sub?: string | null;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentCategory }) => {
    return (
        <div className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:underline">Home</a>
            {currentCategory.main !== 'All' && (
                <>
                    / <a href="#" className="hover:underline">{currentCategory.main}</a>
                    {currentCategory.sub && (
                        <>
                            / <a href="#" className="hover:underline">{currentCategory.sub}</a>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Breadcrumb;