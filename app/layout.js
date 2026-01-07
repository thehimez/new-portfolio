import "./globals.css";

export const metadata = {
  title: "Himesh Bhowmik — Portfolio",
  description: "Personal portfolio website of Himesh Bhowmik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}