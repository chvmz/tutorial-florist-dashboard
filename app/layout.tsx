import "../styles/globals.css"

export const metadata = {
  title: "Florist Dashboard",
  description: "Mock florist order manager"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
