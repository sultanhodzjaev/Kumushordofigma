export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light tracking-wider mb-4">KUMUSH ORDO</h3>
            <p className="text-gray-400 text-sm">
              Серебряные украшения ручной работы
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#categories" className="hover:text-white transition-colors">Ассортимент</a></li>
              <li><a href="#popular" className="hover:text-white transition-colors">Популярное</a></li>
              <li><a href="#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>г. Каракол, ЦУМ, Бутик 58</li>
              <li>+996 700 000 000</li>
              <li>Ежедневно: 10:00 — 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2024 Kumush Ordo. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
