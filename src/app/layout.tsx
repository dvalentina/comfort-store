import '@/app/layout.scss';

import type { Metadata } from 'next';

import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Comfort Store',
  description: 'Goods that make your home even more comfortable!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='grid'>
          <div className='grid__header'>
            <Header />
          </div>
          <div className='grid__body'>{children}</div>
        </div>
      </body>
    </html>
  );
}
