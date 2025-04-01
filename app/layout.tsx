import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';

const retroFont = Press_Start_2P({
weight: '400',
subsets: ['latin'],
display: 'swap',
variable: '--font-retro',
});

export const metadata: Metadata = {
  title: 'Gra Bokserska',
  description: 'Gra bokserska w stylu Shakes and Fidget',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={retroFont.className}>
        {children}
      </body>
    </html>
  );
}
