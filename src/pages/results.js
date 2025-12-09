import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Faqs from '../components/faqs';
import { info } from '../../info';


import aguachiles from '../../public/results/taller_aguachiles.jpg';
import chinas from '../../public/results/taller_chinas.jpg';
import pastas from '../../public/results/taller_pastas.jpg';

import i01 from '../../public/survey/01.jpg';
import i02 from '../../public/survey/02.jpg';
import i03 from '../../public/survey/03.jpg';
import i04 from '../../public/survey/04.jpg';
import i05 from '../../public/survey/05.jpg';

export default function Results({lead}) {
  const {fullName} = lead;
  const firstName = fullName.split(' ')[0];

  const SectionCTA = () => <div className="w-full space-y-4 mt-20">
    <hr className="mb-8"/>
    <p className="ft-4 text-center font-semibold">Tienes alguna pregunta?</p>
    <a href={`https://wa.me/${info.whatsapp.value}`} target="_blank" className="button !w-full">Mándanos un WhatsApp</a>
  </div>;

  return (
    <div className="relative flex flex-col flex-grow bg-gradient-to-t from-blue-50 to-white">
      <div
        className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
        <div className="survey-card border-b pb-12">
          <div className="flex flex-col w-full py-12">
            <h1><span className="font-semibold">{firstName ?? 'Hey'}</span>, te comparto nuestros próximos talleres!
            </h1>
            <div className="container grid grid-cols-1 mt-12">
              <div className="mb-20">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src={aguachiles} layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <div className="flex justify-between">
                  <h2>Aguachiles</h2>
                  <h2>$350 <span className="ft-2 uppercase">mxn</span></h2>
                </div>
                <ul className="mb-4">
                  <li>
                    <b>Aguachile cielo rojo</b><br/>
                    Atún con mango y salsa de clamato
                  </li>
                  <li>
                    <b>Aguachile tropical</b><br/>
                    Camarón con salsa de piña
                  </li>
                  <li>
                    <b>Aguachile callejero</b><br/>
                    Mariscos mixtos sobre tostitos y salsas negras
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${info.whatsapp.value}?text=Me+interesa+el+taller+de+Aguachiles`}
                  className="button !w-full">Quiero inscribirme</a>
              </div>

              <div className="mb-20">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src={chinas} layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <div className="flex justify-between">
                  <h2>Delicias Chinas</h2>
                  <h2>$350 <span className="ft-2 uppercase">mxn</span></h2>
                </div>
                <ul className="mb-4">
                  <li>
                    <b>Pollo a la naranja</b>
                  </li>
                  <li>
                    <b>Arroz frito con camarón</b>
                  </li>
                  <li>
                    <b>Rollitos primavera</b>
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${info.whatsapp.value}?text=Me+interesa+el+taller+de+Delicias+Chinas`}
                  className="button !w-full">Quiero inscribirme</a>
              </div>

              <div className="mb-20">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image src={pastas} layout="fill" objectFit="cover" objectPosition="center"/>
                </div>
                <div className="flex justify-between">
                  <h2>Pastas para Mortales</h2>
                  <h2>$350 <span className="ft-2 uppercase">mxn</span></h2>
                </div>
                <ul className="mb-4">
                  <li>
                    <b>Spaguetti amatriciana</b><br/>
                    Con salsa de tomates, chile quebrado, tocino y parmesano
                  </li>
                  <li>
                    <b>Fetuccini al limón</b><br/>
                    Con salsa Alfredo cítrica y camarones
                  </li>
                  <li>
                    <b>Fussilli a la Toscana</b><br/>
                    Con salsa cremosa de tomate, albahaca, queso y espinacas
                  </li>
                </ul>
                <a
                  href={`https://wa.me/${info.whatsapp.value}?text=Me+interesa+el+taller+de+Pastas+para+Mortales`}
                  className="button !w-full">Quiero inscribirme</a>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 mb-20">
            <p className="ft-6 text-center font-semibold">Te interesa otro taller?</p>
            <a href="" target="_blank" className="button !w-full">Mándanos un WhatsApp</a>
          </div>

        </div>
      </div>

      <Blockbuster
        overhead="Testimonios"
        title="Mira lo que nos dicen los chefs en proceso"
        background={i05}
        imgPos='object-bottom'
      />

      <section className="container mb-20">
        <div className={`relative flex-grow`}>
          <div className="mt-12 relative grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {Array.from({length: 12}, (_, i) =>
              <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
                <Image
                  src={`/survey/testimonio_${String(i + 1).padStart(2, '0')}.png`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>,
            )}
          </div>
        </div>
        <SectionCTA/>
      </section>

      <section className="container my-20">
        <div className="reading-container">
          <div className="relative w-full aspect-square rounded-full overflow-hidden mb-12">
            <Image src={i02} layout="fill" objectFit="cover" objectPosition="top"/>
          </div>
          <p className="mb-8">Hola, soy Bárbara, tengo más de 10 años siendo chef y más de 5 años ayudando a que las
            personas se sientan cómodas y felices cocinando para sí misma o para sus seres queridos.
          </p>
        </div>
        <SectionCTA/>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Por qué debes inscribirte a nuestros talleres"
        background={i03}
        imgPos='object-bottom'
      />

      <section className="container my-20">
        <div className={`relative flex-grow`}>
          <div className="gap-8 grid grid-cols-1">
            <div
              className="flex items-center justify-center py-8 px-16 rounded-xl bg-brand-2 border-2 border-brand-2 shadow-md">
              <p className="font-semibold w-[24ch] ft-4 text-center">Recetas fáciles, sin técnicas complicadas ni
                ingredientes raros</p>
            </div>
            <div
              className="flex items-center justify-center py-8 px-16 rounded-xl bg-brand-2 border-2 border-brand-2 shadow-md">
              <p className="font-semibold w-[24ch] ft-4 text-center">Talleres virtuales y presenciales en GDL</p>
            </div>
            <div
              className="flex items-center justify-center py-8 px-16 rounded-xl bg-brand-2 border-2 border-brand-2 shadow-md">
              <p className="font-semibold w-[24ch] ft-4 text-center">Acceso a la grabación del taller al que
                asististe</p>
            </div>
            <div
              className="flex items-center justify-center py-8 px-16 rounded-xl bg-brand-2 border-2 border-brand-2 shadow-md">
              <p className="font-semibold w-[24ch] ft-4 text-center">Recetario con un par de platillos para tu día a
                día</p>
            </div>
            <div
              className="flex items-center justify-center py-8 px-16 rounded-xl bg-brand-2 border-2 border-brand-2 shadow-md">
              <p className="font-semibold w-[24ch] ft-4 text-center">Acceso inmediato a nuestra comunidad de
                WhatsApp</p>
            </div>
          </div>
        </div>
        <SectionCTA/>
      </section>

      <Blockbuster
        overhead="FAQs"
        title="¿Tienes dudas? probablemente estén aquí"
        background={i04}
        imgPos='object-bottom'
      />

      <section className="container my-20">
        <Faqs/>
        <SectionCTA/>
      </section>

    </div>
  );
}

export async function getServerSideProps(ctx) {
  const {req} = ctx;
  const cookiesHeader = req.headers.cookie || '';

  const keys = ['utm', '_fbc', '_fbp', 'lead'];
  const cookies = {};

  for (const key of keys) {
    const raw = cookiesHeader
      .split('; ')
      .find(c => c.startsWith(`${key}=`))
      ?.split('=')[1];

    if (!raw) continue;

    try {
      const clean = raw.startsWith('j%3A') ? raw.slice(4) : raw;
      cookies[key] = JSON.parse(decodeURIComponent(clean));
    } catch {
      cookies[key] = decodeURIComponent(raw);
    }
  }

  const {lead, utm} = cookies;

  // if (!lead || lead === 'null' || Object.keys(lead).length === 0) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/',
  //     },
  //   };
  // }

  return {
    props: {
      lead: {
        fullName: lead?.fullName ?? '',
        phone: lead?.phone ?? '',
        whatsapp: lead?.whatsapp ?? '',
        sheetRow: lead?.sheetRow ?? '',
      },
      utm: utm ?? null,
    },
  };
}