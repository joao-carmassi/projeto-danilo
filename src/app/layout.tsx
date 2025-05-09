// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BotaoZap from '@/components/BotaZap';
import ContainerNotificacao from '@/components/ContainerNotificacao';
import EspacoNav from '@/components/EspacoNav';

/* TODO: A fazers
  ? Arrumar alt fotos
*/

export const metadata: Metadata = {
  title: 'Loja do VRF',
  description: 'Soluções em climatização VRF com qualidade e confiança',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="mytheme">
      <head>
        {/* validação Search Console */}
        <meta
          name="google-site-verification"
          content="SMw3-MM57gpZMebeF8HUm_gFDefjn4vJWOVAJPU0dNo"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NH8KCRNP');
            `,
          }}
        />

        {/* gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YCYT1J0CEJ"
          strategy="afterInteractive"
          id="gtag-script"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YCYT1J0CEJ');
            `,
          }}
        />
      </head>
      <body>
        {/* Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NH8KCRNP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="mx-auto max-w-[125rem]">
          <EspacoNav />
          {children}
        </main>
        <Footer />
        <BotaoZap />
        <ContainerNotificacao />
      </body>
    </html>
  );
}
