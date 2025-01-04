import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mars Rover Photos | NASA API',
  description: 'Explore photographs taken by NASA\'s Mars rovers: Curiosity, Opportunity, and Spirit.',
  keywords: ['Mars', 'NASA', 'Rover', 'Space', 'Photography', 'Curiosity', 'Opportunity', 'Spirit'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}