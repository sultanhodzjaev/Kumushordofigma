interface HeroProps {
  onQuizOpen: () => void;
}

export function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-tight">
            Серебряные украшения<br />ручной работы
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Минималистичный дизайн, качественные материалы
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onQuizOpen}
              className="px-8 py-4 bg-[#dc2626] text-white rounded-full hover:bg-[#b91c1c] transition-colors font-medium"
            >
              Подобрать за 30 секунд
            </button>
            <a
              href="#categories"
              className="px-8 py-4 border border-gray-300 text-[#1a1a1a] rounded-full hover:border-[#dc2626] hover:text-[#dc2626] transition-colors font-medium"
            >
              Ассортимент
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}