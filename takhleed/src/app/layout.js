import "./globals.css";

export const metadata = {
  title: "Takhleed",
  description: "تنطلق ’تخليد’ من فكرة أن المملكة ذات موروث تاريخي وثقافي عظيم يستحق إعادة إخراجه من الكتب والذاكرة وتجسيده بشكل فني قادر على العبور محليا وعالمياً.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64'
      }
    ]
  }
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
