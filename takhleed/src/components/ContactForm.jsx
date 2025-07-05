'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

// Configuration EmailJS
const SERVICE_ID = 'service_52pbj4q'
const TEMPLATE_ID = 'template_m94ko7c'
const PUBLIC_KEY = 'mwEbj2i2kBF06aIzN'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

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
          message: formData.get('message')
        },
        PUBLIC_KEY
      )

      setSuccess('تم إرسال رسالتك بنجاح!')
      e.target.reset()
    } catch (err) {
      setError('حدث خطأ أثناء إرسال الرسالة')
      console.error('Erreur EmailJS:', err)
    } finally {
      setLoading(false)
    }
  }

 
  return (
    <section className="w-full flex flex-col gap-16 bg-[#C15747] text-white py-16 px-6 md:px-20 dir-rtl">
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

          {/* تفاصيل الرسالة */}
          <div className="flex flex-col gap-5">
            <label className="mb-1 text-[#eee5c1] text-[16px] md:text-[18px] font-medium">تفاصيل الرسالة</label>
            <textarea
              name="message"
              required
              rows="4"
              className="bg-[#D47B6C] border-b border-[#000] outline-none text-[#fff] placeholder:text-[#000]"
              style={{ direction: 'rtl' }}
            />
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
          <div className="text-green-500 text-center mt-4">
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