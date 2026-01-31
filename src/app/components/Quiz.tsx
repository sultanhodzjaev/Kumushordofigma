import { useState } from 'react';
import { X } from 'lucide-react';
import { products } from '@/app/data/products';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Quiz({ isOpen, onClose }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: 'Кому выбираете?',
      options: ['себе', 'в подарок']
    },
    {
      question: 'Бюджет:',
      options: ['до 4 000', '4 000 – 7 000', 'от 7 000']
    },
    {
      question: 'Стиль:',
      options: ['минималистичный', 'заметный']
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Переходим к результатам
      setStep(questions.length);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Здравствуйте! Помогите подобрать украшение.\nКому: ${answers[0]}\nБюджет: ${answers[1]}\nСтиль: ${answers[2]}`
    );
  };

  const openWhatsApp = () => {
    const phone = '996700000000'; // Замените на реальный номер
    window.open(`https://wa.me/${phone}?text=${getWhatsAppMessage()}`, '_blank');
  };

  // Простая подборка (берем первые 6 товаров)
  const recommendations = products.slice(0, 6);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Заголовок */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <h2 className="text-xl font-light">
            {step < questions.length ? 'Подобрать украшение' : 'Ваша подборка'}
          </h2>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Прогресс */}
        {step < questions.length && (
          <div className="px-6 pt-4">
            <div className="flex gap-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i <= step ? 'bg-[#0f5132]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Контент */}
        <div className="p-6">
          {step < questions.length ? (
            /* Вопросы */
            <div className="space-y-6">
              <h3 className="text-lg text-[#1a1a1a] mb-6">{questions[step].question}</h3>
              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full py-4 px-6 border border-gray-200 rounded-xl hover:border-[#0f5132] hover:bg-[#0f5132]/5 transition-all text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Результаты */
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {recommendations.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm text-[#1a1a1a] mb-1">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.price.toLocaleString('ru-RU')} сом</p>
                  </div>
                ))}
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full py-4 bg-[#0f5132] text-white rounded-xl hover:bg-[#0a3d24] transition-colors font-medium"
              >
                Написать в WhatsApp и подобрать вместе
              </button>

              <button
                onClick={handleReset}
                className="w-full py-3 text-[#0f5132] hover:bg-[#0f5132]/5 rounded-xl transition-colors"
              >
                Пройти заново
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}