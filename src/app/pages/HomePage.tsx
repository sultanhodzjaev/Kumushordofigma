import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Categories } from '@/app/components/Categories';
import { Popular } from '@/app/components/Popular';
import { Certificates } from '@/app/components/Certificates';
import { Contacts } from '@/app/components/Contacts';
import { Footer } from '@/app/components/Footer';
import { Quiz } from '@/app/components/Quiz';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export function HomePage() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onQuizOpen={() => setQuizOpen(true)} />
      <Hero onQuizOpen={() => setQuizOpen(true)} />
      <Categories />
      <Popular />
      <Certificates />
      <Contacts />
      <Footer />
      <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
      <ScrollToTop />
    </div>
  );
}