import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const tnrCondensed = localFont({
  variable: '--font-sans',
  src: './fonts/Times-New-Roman-MT-Condensed.woff2',
});

const anaktoria = localFont({
  variable: '--font-heading',
  src: './fonts/Anaktoria.woff2',
});

export const metadata: Metadata = {
  title: 'Happily Never After',
  description: 'Donations for Happily Never After',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tnrCondensed.variable} ${anaktoria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
