import "./globals.css"
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <title>Satyam Singh</title>
  <link rel='icon' href='/favicon.png' sizes='32x32'/>
  <meta name="description" content="Portfolio of Satyam Singh - Full-Stack Developer specializing in modern web applications, UI/UX and problem-solving." />
</head>

      <body className="overflow-x-hidden">
        

        <div className="relative">{children}</div>
         <Analytics />
      </body>
    </html>
  );
}
