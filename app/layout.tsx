import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Sree Hari R | Computer Science Engineer | Full-Stack Developer',
  description:
    'Portfolio of Sree Hari R, a Computer Science Engineer experienced in Next.js, TypeScript, full-stack web development, AI-assisted development and cybersecurity.',
  keywords: [
    'Sree Hari R',
    'Computer Science Engineer',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Cybersecurity',
    'Trust-Chain Escrow',
  ],
  authors: [{ name: 'Sree Hari R' }],
  openGraph: {
    title: 'Sree Hari R | Computer Science Engineer | Full-Stack Developer',
    description:
      'Portfolio of Sree Hari R, a Computer Science Engineer experienced in Next.js, TypeScript, full-stack web development, AI-assisted development and cybersecurity.',
    url: 'https://sreehari-portfolio.vercel.app',
    siteName: 'Sree Hari R Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased font-sans selection:bg-primary-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
