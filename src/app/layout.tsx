import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mood Music AI – Descubre la música que se adapta a tu estado de ánimo",
    description:
        "Mood Music AI utiliza inteligencia artificial para analizar tu estado de ánimo y recomendarte la música perfecta, aprendiendo de tus preferencias. Descubre playlists personalizadas para cada emoción.",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Mood Music AI",
        description:
            "Descubre la música perfecta para cada estado de ánimo con recomendaciones basadas en inteligencia artificial.",
        url: "https://www.tusitio.com", // Reemplaza con tu URL real
        siteName: "Mood Music AI",
        images: [
            {
                url: "/favicon.png",
                width: 512,
                height: 512,
                alt: "Mood Music AI",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mood Music AI",
        description:
            "Descubre la música perfecta para cada estado de ánimo con recomendaciones basadas en inteligencia artificial.",
        images: ["/favicon.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
