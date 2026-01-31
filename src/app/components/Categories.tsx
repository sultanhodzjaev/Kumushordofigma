import { categories } from '@/app/data/products';

export function Categories() {
  const categoryImages: Record<string, string> = {
    'earrings': 'https://images.unsplash.com/photo-1557019494-94d421fc6653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBlYXJyaW5ncyUyMG1pbmltYWx8ZW58MXx8fHwxNzY5MjY5NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'rings': 'https://images.unsplash.com/photo-1612051525473-527d17db5616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjByaW5nJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjkxODU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'bracelets': 'https://images.unsplash.com/photo-1676291055501-286c48bb186f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldHxlbnwxfHx8fDE3NjkyMTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] text-center mb-12">
          Категории
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={categoryImages[category.id]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-light text-[#1a1a1a]">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
