import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <title>satyam</title>
  <link rel='icon' href='/favicon.png' sizes='32x32'/>
  <meta name="description" content="Portfolio of Satyam Singh - Full-Stack Developer specializing in modern web applications, UI/UX and problem-solving." />
</head>

      <body className="md:text-black bg-black/20  overflow-x-hidden">
        

        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
