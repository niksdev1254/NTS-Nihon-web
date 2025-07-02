import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import { organizationSchema } from '@/lib/structured-data';
import { GA_TRACKING_ID, GTM_ID } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'NTS Nihon Global - Bridging India & Japan Through Innovation',
  description: 'NTS Nihon Global connects opportunities across borders with cutting-edge technology solutions spanning 11 verticals including AI job matching, mobility services, international trade, language learning, and cultural exchange between India and Japan.',
  keywords: 'NTS Nihon Global, India Japan bridge, technology solutions, job matching, mobility services, international trade, language learning, cultural exchange, startup accelerator, HR tech, analytics, consulting, Maharashtra, Delhi, Tamil Nadu, Tokyo, Osaka, Kyoto, Hokkaido',
  authors: [{ name: 'NTS Nihon Global' }],
  creator: 'NTS Nihon Global',
  publisher: 'NTS Nihon Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ntsnihonglobal.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ja-JP': '/ja',
      'hi-IN': '/hi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ntsnihonglobal.com',
    title: 'NTS Nihon Global - Bridging India & Japan Through Innovation',
    description: 'NTS Nihon Global connects opportunities across borders with cutting-edge technology solutions spanning 11 verticals including AI job matching, mobility services, international trade, language learning, and cultural exchange between India and Japan.',
    siteName: 'NTS Nihon Global',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'NTS Nihon Global - Bridging India & Japan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NTS Nihon Global - Bridging India & Japan Through Innovation',
    description: 'Connecting opportunities across borders with cutting-edge technology solutions and cultural understanding.',
    images: ['/image.png'],
    creator: '@ntsnihonglobal',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#dc1a0e' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc1a0e" />
        <meta name="msapplication-TileColor" content="#dc1a0e" />
        <meta name="theme-color" content="#dc1a0e" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
        
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'functionality_storage': 'denied',
                    'personalization_storage': 'denied'
                  });
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-inter antialiased">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}