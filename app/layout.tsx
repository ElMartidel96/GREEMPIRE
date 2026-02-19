import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://greempire.vercel.app'),
  title: 'Green Empire Lawn & Landscape | Complete Exterior Care',
  description: 'Green Empire Lawn & Landscape provides professional lawn care, landscaping, gutter cleaning, pressure washing, and garden design services. Your complete exterior maintenance solution — one call does it all.',
  keywords: 'lawn care, landscaping, gutter cleaning, pressure washing, garden design, yard maintenance, lawn mowing, mulching, leaf removal, exterior maintenance, Green Empire',
  authors: [{ name: 'Green Empire Lawn & Landscape' }],
  creator: 'Green Empire Lawn & Landscape',
  openGraph: {
    title: 'Green Empire Lawn & Landscape | Complete Exterior Care',
    description: 'Professional lawn care, landscaping, and exterior maintenance. One trusted team for everything outside your door.',
    type: 'website',
    locale: 'en_US',
    url: 'https://greempire.vercel.app',
    siteName: 'Green Empire Lawn & Landscape',
    images: [
      {
        url: '/preview.jpeg',
        width: 947,
        height: 947,
        alt: 'Green Empire Lawn & Landscape - Complete Exterior Care',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Empire Lawn & Landscape',
    description: 'Your complete exterior maintenance solution. Lawn care, landscaping, gutter cleaning & more.',
    images: ['/preview.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2d6a2e" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <main className="min-h-screen min-h-[100dvh] bg-[#fafafb] dark:bg-[#0a0a0c] transition-colors duration-300">
              {children}
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
