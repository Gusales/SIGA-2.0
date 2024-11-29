import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuArrowUpRight, LuCalendar } from "react-icons/lu";

const avisos = [
  {
    id: 1,
    titulo: "Aulas assíncronas",
    data: "14/10/2024 - 18/10/2024",
    status: "importante",
    descricao: "Devido a manutenção no reservatório de água do campus, as aulas presenciais estarão suspensas na próxima semana, por tanto, os professores deverão ministrar suas aulas de forma síncrona ou assíncrona."
  },
  {
    id: 2,
    titulo: "Aulas assíncronas",
    data: "21/10/2024 e 22/10/2024",
    status: "importante",
    descricao: "Não foi possível concluir a manutenção na caixa d`água do campus dentro do conograma previsto. Então, as aulas ocorrerão de forma remota via plataforma Teams."
  },
  {
    id: 3,
    titulo: "Bootcamp Next Gen",
    data: "14/10/2024",
    descricao: "Tudo é possível com AI"
  },
  {
    id: 4,
    titulo: "Período Eleitoral",
    data: "05/10/2024",
    descricao: "Informamos que, nesse sábado, as aulas e demais atividades presenciais estarão suspensas no Campus Fatec Carapiicuíba devido ao Período Eleitoral."
  },
]

export function CarrosselAvisos(){
  const [current, setCurrent] = useState(0)

  function prev(){
    setCurrent(state => state === 0 ? avisos.length - 1 : state  - 1)
  }

  function next(){
    setCurrent(state => state === avisos.length - 1 ? 0 : state  + 1)
  }

  return(
    <div className="relative flex flex-col justify-around gap-4 mt-1">
      <div className="flex items-center gap-1">
        <p className="sr-only">Slide { current + 1 } de {avisos.length}</p>
        { avisos.map((_, index) => (
          <div className={`${index === current ? "bg-vermelho-400" : "bg-neutro-500"} size-2 rounded-full`} />
        )) }
      </div>
      {/* Slides */}
      <div className="overflow-hidden">
        <div className="flex gap-1 relative items-center justify-between rounded transition-transform ease-out duration-500" style={{ transform: `translateX(calc(-${current * 101}%))` }}>
          { avisos.map(aviso => (
            <div className="min-w-full max-w-full grid place-items-center">
              <article
                className="bg-white dark:bg-azul-800 dark:text-neutro w-full mr-1 min-h-36 overflow-hidden flex flex-col gap-2 rounded-md text-xs p-2"
                >
                <div className="flex items-center gap-2">
                  <p className="py-1.5 px-4 bg-sky-500 text-xs flex gap-1 font-light text-white w-fit rounded-full leading-tight">
                    <LuCalendar size={12} />
                    {aviso.data}
                  </p>
                  {aviso.status && (<span className="px-4 py-1.5 rounded-full bg-crayola font-light font-title">{aviso.status}</span>)}
                </div>
                  <h3 className="text-xs font-medium font-title leading-normal">{aviso.titulo}</h3>
                <p className="text-[10px]">{aviso.descricao}</p>
                <a href="#" className="text-vermelho-400 uppercase transition-colors cursor-pointer flex items-center">
                  Veja mais
                  <LuArrowUpRight size={16} />
                </a>
              </article>
            </div>
          )) }
        </div>
      </div>

      {/* Controles */}
      <div className="absolute h-full -left-4 top-3 z-[99] flex items-center justify-center opacity-60">
        <button onClick={prev}>
            <IoIosArrowBack className="text-azul-800 dark:text-neutro-50 font-bold" size={24} />
          </button>
      </div>
      <div className="absolute h-full -right-4 top-3 z-[99] flex items-center justify-center opacity-60">
        <button onClick={next}>
          <IoIosArrowForward className="text-azul-800 dark:text-neutro-50 font-bold" size={24} />
        </button>
      </div>
    </div>
  )
}
