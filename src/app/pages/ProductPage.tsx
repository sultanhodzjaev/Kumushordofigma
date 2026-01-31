import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { products } from '@/app/data/products';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Товар не найден</h2>
          <Link to="/" className="text-[#dc2626] hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const openWhatsApp = () => {
    const phone = '996700000000'; // Замените на реальный номер
    const url = window.location.href;
    const message = encodeURIComponent(`Здравствуйте! Хочу купить это украшение: ${product.name}.\nСсылка: ${url}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Похожие товары (из той же категории)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#dc2626] transition-colors">
            <ArrowLeft size={20} />
            <span>Назад</span>
          </Link>
        </div>
      </div>

      {/* Контент */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-[#dc2626]' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Информация */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-[#1a1a1a] font-light">
                {product.price.toLocaleString('ru-RU')} сом
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Кнопка заказа */}
            <button
              onClick={openWhatsApp}
              className="w-full md:w-auto px-8 py-4 bg-[#dc2626] text-white rounded-full hover:bg-[#b91c1c] transition-colors font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Заказать в WhatsApp
            </button>

            {/* Характеристики */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <h3 className="font-medium text-[#1a1a1a]">Характеристики</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Материал:</span>
                  <span className="text-[#1a1a1a]">Серебро 925 пробы</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Категория:</span>
                  <span className="text-[#1a1a1a] capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Производство:</span>
                  <span className="text-[#1a1a1a]">Ручная работа</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ��охожие товары */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-8">
              Похожие товары
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm font-light text-[#1a1a1a] mb-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedProduct.price.toLocaleString('ru-RU')} сом
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Фиксированная кнопка заказа (мобила) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <button
          onClick={openWhatsApp}
          className="w-full py-4 bg-[#dc2626] text-white rounded-full hover:bg-[#b91c1c] transition-colors font-medium flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Заказать в WhatsApp
        </button>
      </div>
    </div>
  );
}