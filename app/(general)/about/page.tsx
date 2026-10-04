import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'ABOUT PAGE',
 description: 'ABOUT Description',
 keywords: ['About Page', 'Gonzalo', 'información', '...'],
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>   
    )
}; 