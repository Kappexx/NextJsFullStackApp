import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvaider from '@/components/AuthProvaider/AuthProvaider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gio Dev',
  description: 'Gios description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider>
          <AuthProvaider>
            <div    className='conteiner'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvaider>
          
        </ThemeProvider>
        
        
      </body>
    </html>
  )
}
