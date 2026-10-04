import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Pagina de contacto',
 keywords: ['Contacto'],

};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}

