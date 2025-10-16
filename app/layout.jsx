import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'clonechatgpt',
  description: 'A minimal Next + Tailwind starter'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
