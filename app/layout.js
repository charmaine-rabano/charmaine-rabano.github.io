// 'use client';

import "./globals.css";
import Theme from "./theme";
// import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "Charmaine Eunice - Portfolio",
  description: "Portfolio website of Charmaine Eunice Rabano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
