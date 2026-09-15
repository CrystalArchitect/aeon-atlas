import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antimemetics Research Explorer',
  description: 'Interactive exploration of music, narrative, and canonical knowledge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
