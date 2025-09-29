import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pflugerville Events & Community | Premium Event Management',
    template: '%s | Pflugerville Events'
  },
  description: 'Discover premium events, conferences, and community gatherings in Pflugerville. Join our exclusive events featuring world-class speakers, networking opportunities, and transformative experiences.',
  keywords: [
    'Pflugerville events',
    'premium conferences',
    'community gatherings',
    'event management',
    'networking events',
    'professional development',
    'business conferences',
    'keynote speakers',
    'corporate events',
    'event planning',
    'Pflugerville community',
    'Texas events'
  ],
  authors: [{ name: 'Moil Team', url: 'https://pflugervilleventurefest.com' }],
  creator: 'Moil',
  publisher: 'Moil',
  metadataBase: new URL('https://pflugervilleventurefest.com'),
  alternates: {
    canonical: 'https://pflugervilleventurefest.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pflugerville Events & Community | Premium Event Management',
    description: 'Join exclusive events featuring world-class speakers, networking opportunities, and transformative experiences in Pflugerville.',
    url: 'https://pflugervilleventurefest.com',
    siteName: 'Pflugerville Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pflugerville Events - Premium conferences and community gatherings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pflugerville Events & Community',
    description: 'Premium events, conferences, and community gatherings featuring world-class speakers.',
    images: ['/og-image.jpg'],
    creator: '@PflugervilleEvents',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  category: 'business',
  classification: 'Event Management and Community Services',
  other: {
    'business.type': 'Event Management',
    'specialization': 'Premium Conferences, Corporate Events, Community Gatherings',
    'location': 'Pflugerville, Texas',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5843BD" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}