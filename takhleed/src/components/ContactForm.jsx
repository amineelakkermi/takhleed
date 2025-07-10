'use client'

import { useState , useEffect } from 'react'
import emailjs from 'emailjs-com'

// Configuration EmailJS
const SERVICE_ID = 'service_52pbj4q'
const TEMPLATE_ID = 'template_m94ko7c'
const PUBLIC_KEY = 'mwEbj2i2kBF06aIzN'

// Custom scrollbar styles
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #33241d;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('اختر نوع الخدمة')
  const [serviceType, setServiceType] = useState('')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.service-type-dropdown')) return;
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Inject custom scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customScrollbarStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
  
    const formData = new FormData(e.target)
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          phone: formData.get('phone'),
          service_type: formData.get('service_type'), // Utilisez le champ select
          message: formData.get('message')
        },
        PUBLIC_KEY
      )
      
      setSuccess('تم إرسال رسالتك بنجاح!')
      e.target.reset()
    } catch (error) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

 
  return (
    <section className="w-full flex flex-col gap-16 bg-[#C15747] text-white pt-36 pb-24 px-6 md:px-20 dir-rtl">
      {/* Titre */}
      <div className="text-center">
        <h2 className="font-handicrafts text-[25px] md:text-[45px] mb-2">اترك أثراً ... وابدأ رحلتك اليوم</h2>
        <p className="text-sm md:text-base">
          نحن هنا لنضيء لحكايتك، ونساعدك في صياغة أثرٍ يستمر. تواصل معنا فالتاريخ يُكتب الآن
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-[#D47B6C] px-6 md:px-16 py-6 md:py-16 rounded-xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16" style={{ direction: 'rtl' }}>
          <div className="flex flex-col gap-4">
            {/* الاسم الكامل */}
            <div className="flex flex-col">
              <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                required
                className="bg-[#D47B6C] border-b border-[#000] outline-none text-[#fff] placeholder:text-[#000]"
                style={{ direction: 'ltr', textAlign: 'right' }}
              />
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex flex-col">
              <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                required
                className="bg-[#D47B6C] border-b border-[#000] outline-none text-[#fff] placeholder:text-[#000]"
                style={{ direction: 'ltr', textAlign: 'right' }}
              />
            </div>

            {/* رقم الجوال */}
            <div className="flex flex-col">
              <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">رقم الجوال</label>
              <input
                type="tel"
                name="phone"
                required
                className="bg-[#D47B6C] border-b border-[#000] outline-none text-[#fff] placeholder:text-[#000]"
                style={{ direction: 'ltr', textAlign: 'right' }}
              />
            </div>
          </div>

        {/* نوع الخدمة */}
<div className="flex flex-col gap-4">
  <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">نوع الخدمة</label>
  <div className="relative service-type-dropdown">
    <input 
      type="hidden" 
      name="service_type" 
      value={selectedOption}
      className="hidden"
    />
    <div className="bg-[#D47B6C] border-b border-[#000] rounded-lg overflow-hidden cursor-pointer"
         onClick={() => setIsOpen(!isOpen)}>
      <div className="px-4 py-2 flex items-center justify-between">
        <span className="text-[#fff] text-[16px] md:text-[18px]">{selectedOption}</span>
        <svg className="w-5 h-5 text-[#000] transform transition-transform duration-200"
             style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    <div className={`absolute top-full left-0 w-full bg-[#D47B6C] border-b border-[#000] rounded-b-lg overflow-hidden mt-1 transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="overflow-y-auto max-h-[300px]" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#ffffff #33241d'
      }}>
        <div className="px-4 py-2 text-[#000] font-medium">خدماتنا</div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('التوثيق الشامل')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">التوثيق الشامل</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('التوثيق المؤسسي')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">التوثيق المؤسسي</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('متحف الجهة')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">متحف الجهة</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('صالون تخليد')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">صالون تخليد</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('الرحلات الثقافية')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">الرحلات الثقافية</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('المساحات الثقافية')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">المساحات الثقافية</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('المزادات الثقافية')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">المزادات الثقافية</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('الشخصية الخالدة')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">الشخصية الخالدة</span>
        </div>
        <div className="px-4 py-2 text-[#000] font-medium mt-2">استفسارات / شكاوى</div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('استفسار')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">استفسار</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('شكوى')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">شكوى</span>
        </div>
        <div className="px-4 py-2 hover:bg-[#b86c2c] cursor-pointer"
             onClick={() => {
               setSelectedOption('غير ذلك')
               setIsOpen(false)
             }}>
          <span className="text-[#fff]">غير ذلك</span>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* تفاصيل الرسالة */}
          <div className="flex flex-col gap-5">
            <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">تفاصيل الرسالة</label>
            <textarea
              name="message"
              required
              rows="4"
              className="bg-[#D47B6C] border-b border-[#000] outline-none text-[#fff] placeholder:text-[#000] w-full"
              style={{ direction: 'rtl' }}
            ></textarea>
          </div>

          {/* زر الإرسال */}
          <div className="flex justify-end items-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-2 font-handicrafts text-[25px] border-2 border-[#fff] rounded-full transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'جاري الإرسال...' : 'إرسال'}
            </button>
          </div>
        </form>

        {/* Messages de succès/erreur */}
        {success && (
          <div className="text-green text-center mt-4">
            {success}
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center mt-4">
            {error}
          </div>
        )}
      </div>

      {/* Pied de page */}
      <div className="text-sm flex flex-col md:flex-row justify-between items-center gap-4 mt-16">
        <div className="text-center md:text-right text-[18px] md:text-[22px]">
          <p>المملكة العربية السعودية - الرياض - حي التعاون</p>
          <p>طريق الإمام سعود بن عبد العزيز بن محمد ـ</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:Takhleed@gharesah.sa"
            className="hover:text-gray-200 text-[18px] md:text-[20px] transition"
          >
            Takhleed@gharesah.sa
          </a>
          <a
            href="https://wa.me/966553317557"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 text-[18px] md:text-[20px] transition"
            dir="ltr"
          >
            +966 5533 17557
          </a>
        </div>
      </div>
    </section>
  )
}