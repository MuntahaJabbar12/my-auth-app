import "./globals.css";
import Providers from "./providers"; 

export const metadata = {
  title: "My Auth App",
  description: "NextAuth Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
