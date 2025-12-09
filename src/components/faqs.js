import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Necesito saber cocinar?",
      a: "Para nada. Si estás empezando, te acompañamos desde lo más básico. Y si ya cocinas, pero quieres hacerlo más fácil o más disfrutable, también te va a servir muchísimo."
    },
    {
      q: "¿Cuánto dura el taller?",
      a: "Las sesiones duran entre 60 y 90 minutos, lo suficiente para que logres realizar el platillo. El contenido es tuyo desde que te inscribes, para que avances a tu ritmo, sin presiones, cuando y como tú lo necesites."
    },
    {
      q: "¿Qué tan personalizado es el acompañamiento?",
      a: "Bastante, desde el primer día tienes contacto directo por WhatsApp con alguien que está para ayudarte y guiarte cuando lo necesites."
    },
    {
      q: "¿Qué pasa si no entiendo algo?",
      a: "Te explicamos paso a paso, con calma. Puedes preguntar todo lo que quieras, las veces que necesites. Justo para eso estamos."
    },
    {
      q: "¿Y si no me funciona?",
      a: "Entonces seguimos contigo hasta que lo logres. Porque más que venderte un curso, queremos que te sientas bien cocinando. Nos importa que lo vivas a tu manera, y con confianza."
    }
  ];


  return (
    <section className='py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-50 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}