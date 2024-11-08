import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import StructuredData from './components/StructuredData'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coltonspyker.com'),
  title: {
    default: 'Colton Spyker - AI Engineer Portfolio',
    template: '%s | Colton Spyker'
  },
  description: 'Colton Spyker is an AI Engineer specializing in machine learning, computer vision, and natural language processing. Based in Los Angeles, developing cutting-edge AI solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'NLP', 'Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Artificial Intelligence', 'Los Angeles'],
  authors: [{ name: 'Colton Spyker', url: 'https://coltonspyker.com' }],
  creator: 'Colton Spyker',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coltonspyker.com',
    title: 'Colton Spyker - AI Engineer Portfolio',
    description: 'Explore the projects and skills of Colton Spyker, an AI Engineer specializing in cutting-edge machine learning technologies.',
    siteName: 'Colton Spyker',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colton Spyker - AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colton Spyker - AI Engineer Portfolio',
    description: 'Explore the projects and skills of Colton Spyker, an AI Engineer specializing in cutting-edge machine learning technologies.',
    creator: '@coltonspyker',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://coltonspyker.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#09090B" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-gray-800">
          <nav aria-label="Footer Navigation">
            <ul className="flex gap-4 justify-center py-8 text-sm text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li>© {new Date().getFullYear()} Colton Spyker</li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  )
}