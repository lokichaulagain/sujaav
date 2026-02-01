import { GeneralProviders, ThemeProvider } from '@/components/client';
import { PROJECT_DESCRIPTION, PROJECT_NAME } from '@/lib/constants';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={fontSans.variable}
      suppressHydrationWarning
      lang="en"
    >
      <body>
        <GeneralProviders>
          <ThemeProvider
            disableTransitionOnChange
            defaultTheme="light"
            attribute="class"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </GeneralProviders>
      </body>
    </html>
  );
}
