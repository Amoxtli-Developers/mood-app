import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* 
   1. Carga de la fuente Inter desde Google Fonts
*/
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

/* 
   2. Metadatos de Next.js (SEO básico + Open Graph + Twitter Cards)
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
        url: "https://www.tusitio.com", // Reemplaza con tu dominio real
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
   3. RootLayout con metaetiquetas personalizadas para SEO avanzado.
   Se agregan meta keywords, autor, robots, etc. dentro de <head>.
*/
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                {/* Ícono */}
                <link rel="icon" href="/favicon.png" />

                {/* Etiquetas meta adicionales para SEO */}
                <meta
                    name="keywords"
                    content="música, playlists, inteligencia artificial, recomendación musical, IA, NLP, Spotify, Apple Music, YouTube, estado de ánimo, actividades, chat interactivo, Watson Assistant, recomendador, Mood Music AI"
                />
                <meta name="author" content="Amoxtli Web Developers" />
                <meta name="robots" content="index, follow" />
                {/* Color del navegador en dispositivos móviles (opcional) */}
                <meta name="theme-color" content="#31D158" />
            </head>
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
