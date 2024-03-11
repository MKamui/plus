import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-distant">
        {children}
      </body>
    </html>
  );
}
