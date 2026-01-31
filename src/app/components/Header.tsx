import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onQuizOpen: () => void;
}

export function Header({ onQuizOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="text-xl font-light tracking-wider text-[#1a1a1a]">
          KUMUSH ORDO
        </Link>

        {/* Бургер-меню (мобила) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden"
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Десктоп меню */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#categories" className="text-[#1a1a1a] hover:text-[#0f5132] transition-colors">
            Ассортимент
          </a>
          <a href="#popular" className="text-[#1a1a1a] hover:text-[#0f5132] transition-colors">
            Популярное
          </a>
          <a href="#certificates" className="text-[#1a1a1a] hover:text-[#0f5132] transition-colors">
            Сертификаты
          </a>
          <a href="#contacts" className="text-[#1a1a1a] hover:text-[#0f5132] transition-colors">
            Контакты
          </a>
          <button
            onClick={onQuizOpen}
            className="px-6 py-2 bg-[#0f5132] text-white rounded-full hover:bg-[#0a3d24] transition-colors"
          >
            Подобрать за 30 секунд
          </button>
        </nav>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <nav className="flex flex-col p-4 gap-4">
            <button
              onClick={() => {
                onQuizOpen();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#0f5132] text-white rounded-lg font-medium"
            >
              Подобрать за 30 секунд
            </button>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#1a1a1a]"
            >
              Ассортимент
            </a>
            <a
              href="#popular"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#1a1a1a]"
            >
              Популярное
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#1a1a1a]"
            >
              Сертификаты
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#1a1a1a]"
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
