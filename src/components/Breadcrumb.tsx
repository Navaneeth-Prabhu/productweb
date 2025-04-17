// 4. Breadcrumb.tsx
import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="text-sm text-gray-500 mb-6">
            <a href="#" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Shoes</a>
        </div>
    );
};

export default Breadcrumb;