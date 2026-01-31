import { Link } from 'react-router';
import { products } from '@/app/data/products';
import { motion } from 'motion/react';

export function Popular() {
  // Показываем первые 8 товаров
  const popularProducts = products.slice(0, 8);

  return (
    <section id="popular" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] text-center mb-12">
          Популярное
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/product/${product.id}`}
                className="group block"
              >
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-light text-[#1a1a1a] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {product.price.toLocaleString('ru-RU')} сом
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
