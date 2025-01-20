import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'SEO Description',
    keywords: ['Contact Page', 'Stivenprodev', 'Contact', '...'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    )
}