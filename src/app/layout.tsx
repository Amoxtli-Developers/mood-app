import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProviderWrapper from "@/components/Layout/ReduxProviderWrapper";

/* 
   1. Load the Inter font from Google Fonts
*/
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

/* 
   2. Next.js metadata (basic SEO + Open Graph + Twitter Cards)
*/
export const metadata: Metadata = {
    title: "Mood Music AI – Descubre la música que se adapta a tu estado de ánimo",
    description:
        "Mood Music AI utiliza inteligencia artificial para analizar tu estado de ánimo y recomendarte la música perfecta, aprendiendo de tus preferencias. Descubre playlists personalizadas para cada emoción, integradas con Spotify, Apple Music y YouTube.",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Mood Music AI",
        description:
            "Descubre la música perfecta para cada estado de ánimo con recomendaciones basadas en IA y NLP. Integra Spotify, Apple Music y YouTube para crear playlists personalizadas.",
        url: "https://www.tusitio.com", // Replace with your actual domain
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
            "Crea y descubre playlists personalizadas según tu estado de ánimo y actividad, con integración a servicios de streaming.",
        images: ["/favicon.png"],
    },
};

/*
   3. RootLayout with additional meta tags for advanced SEO.
   This is now a Server Component (without "use client") so you can export metadata.
   The ReduxProviderWrapper is a Client Component that wraps your app with the Redux Provider.
*/
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                {/* Icon */}
                <link rel="icon" href="/favicon.png" />
                {/* Additional SEO meta tags */}
                <meta
                    name="keywords"
                    content="música, playlists, inteligencia artificial, recomendación musical, IA, NLP, Spotify, Apple Music, YouTube, estado de ánimo, actividades, chat interactivo, Watson Assistant, recomendador, Mood Music AI"
                />
                <meta name="author" content="Amoxtli Web Developers" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#31D158" />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <ReduxProviderWrapper>{children}</ReduxProviderWrapper>
            </body>
        </html>
    );
}
