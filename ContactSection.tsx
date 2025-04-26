import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mercedes-Benz aracınız için profesyonel servis hizmeti almak veya daha fazla bilgi edinmek için bizimle iletişime geçin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Google Haritası */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden mb-8 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.5540643439476!2d37.4121971!3d37.09192650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5fd41543afb%3A0x8d1a858c197bbf1e!2sMercedes%20%C3%96zel%20Servis%20%7C%20Uzmanlar!5e0!3m2!1str!2str!4v1745602830779!5m2!1str!2str" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* İletişim Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">İletişim Bilgilerimiz</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Adres</h4>
                  <p className="text-gray-600">Şehitkamil, Gaziantep</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Telefon</h4>
                  <p className="text-gray-600">+90 534 591 0100</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">E-posta</h4>
                  <p className="text-gray-600">uzmanlarmotorluaraclar@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Çalışma Saatleri</h4>
                  <p className="text-gray-600">Pazartesi - Cumartesi: 08:30 - 18:30</p>
                  <p className="text-gray-600">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
            
            {/* İletişim Mesajı */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
              <p className="text-gray-600 mb-4">
                Mercedes-Benz aracınızla ilgili herhangi bir sorunuz mu var? Bize telefon, e-posta veya WhatsApp üzerinden ulaşabilirsiniz.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+905345910100" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Hemen Ara
                </a>
                <a href="mailto:uzmanlarmotorluaraclar@gmail.com" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200">
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}