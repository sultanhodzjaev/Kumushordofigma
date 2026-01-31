import { MapPin, Phone, MessageCircle } from 'lucide-react';

export function Contacts() {
  const address = 'Кыргызстан, г. Каракол, ЦУМ, Бутик 58, 2 этаж';
  const phone = '+996 700 000 000';
  const whatsappPhone = '996700000000';

  const openWhatsApp = () => {
    const message = encodeURIComponent('Здравствуйте! У меня есть вопрос.');
    window.open(`https://wa.me/${whatsappPhone}?text=${message}`, '_blank');
  };

  const openMaps = () => {
    // Координаты Каракола (примерные)
    window.open('https://www.google.com/maps/search/?api=1&query=Каракол+ЦУМ', '_blank');
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] text-center mb-12">
          Контакты
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Карта */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11644.396894937!2d78.39!3d42.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI4JzQ4LjAiTiA3OMKwMjMnMjQuMCJF!5e0!3m2!1sru!2skg!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта местоположения"
            />
          </div>

          {/* Информация */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626]/10 rounded-full flex items-center justify-center">
                <MapPin className="text-[#dc2626]" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Адрес</h3>
                <p className="text-gray-600">{address}</p>
                <button
                  onClick={openMaps}
                  className="text-[#dc2626] hover:underline mt-2 text-sm"
                >
                  Построить маршрут
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626]/10 rounded-full flex items-center justify-center">
                <Phone className="text-[#dc2626]" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Телефон</h3>
                <a href={`tel:${phone}`} className="text-gray-600 hover:text-[#dc2626]">
                  {phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#dc2626]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="text-[#dc2626]" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">WhatsApp</h3>
                <p className="text-gray-600 mb-2">Напишите нам в мессенджер</p>
                <button
                  onClick={openWhatsApp}
                  className="px-6 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium"
                >
                  Написать в WhatsApp
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-medium text-[#1a1a1a] mb-2">Режим работы</h3>
              <p className="text-gray-600">Ежедневно: 10:00 — 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}