import "./globals.css";
import Providers from "./providers"; 
import Navbar from "./Navbar";

export const metadata = {
  title: "My Auth App",
  description: "NextAuth Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />   
          {children}
        </Providers>
      </body>
    </html>
  );
}
