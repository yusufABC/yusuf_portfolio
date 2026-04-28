import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yusuf Abdullah | Full Stack Developer',
  description:
    'Full Stack Developer passionate about creating modern web experiences. Building scalable applications with cutting-edge technologies.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Web Developer',
    'Yusuf Abdullah',
  ],
  authors: [{ name: 'Yusuf Abdullah' }],
  openGraph: {
    title: 'Yusuf Abdullah | Full Stack Developer',
    description:
      'Full Stack Developer passionate about creating modern web experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
