import { certificates } from '@/app/data/products';
import { Gift } from 'lucide-react';

export function Certificates() {
  const openWhatsApp = (amount: number) => {
    const phone = '996700000000'; // Замените на реальный номер
    const message = encodeURIComponent(`Здравствуйте! Хочу подарочный сертификат на ${amount.toLocaleString('ru-RU')} сом.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
            Подарочные сертификаты
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Подарите возможность выбрать украшение самостоятельно
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#dc2626]/10 rounded-full flex items-center justify-center">
                <Gift className="text-[#dc2626]" size={32} />
              </div>
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
                {cert.amount.toLocaleString('ru-RU')} сом
              </h3>
              <button
                onClick={() => openWhatsApp(cert.amount)}
                className="w-full py-3 bg-[#dc2626] text-white rounded-lg hover:bg-[#b91c1c] transition-colors font-medium"
              >
                Забронировать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}