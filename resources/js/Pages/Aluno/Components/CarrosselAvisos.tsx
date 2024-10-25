import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";


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
  // const [count, setCount] = useState(avisos.length)

  function prev(){
    setCurrent(state => state === 0 ? avisos.length - 1 : state  - 1)
  }

  function next(){
    setCurrent(state => state === avisos.length - 1 ? 0 : state  + 1)
  }

  return(
    <div className="relative flex flex-col justify-around overflow-hidden gap-4 mt-1">
      <div className="flex items-center gap-1">
        <p className="sr-only">Slide { current + 1 } de {avisos.length}</p>
        { avisos.map((_, index) => (
          <div className={`${index === current ? "bg-vermelho-400" : "bg-neutro-500"} size-2 rounded-full`} />
        )) }
      </div>
      {/* Slides */}
      <div className="flex relative items-center justify-between transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        { avisos.map(aviso => (
          <div className="min-w-full max-w-full grid place-items-center">
            <article
              className="bg-white dark:text-black w-4/5 mr-1 min-h-36 overflow-hidden flex flex-col gap-2 rounded-md text-xs p-2"
              >
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium font-title leading-normal">{aviso.titulo}</h3>
                <span className="px-2 rounded-full bg-crayola font-light font-title">{aviso.status}</span>
              </div>
              <p className="py-1.5 px-4 bg-azul-400 flex gap-1 font-light text-neutro-200 w-fit rounded-full leading-tight">
                <LuCalendar size={12} />
                {aviso.data}
              </p>
              <p>{aviso.descricao}</p>
              <a href="#" className="text-azul-400 underline underline-offset-2 hover:text-azul-300 transition-colors cursor-pointer">Veja mais</a>
            </article>
          </div>
        )) }
      </div>

      {/* Controles */}
      <div className="absolute h-full left-0 flex items-center justify-center">
        <button onClick={prev}>
            <IoIosArrowBack className="text-azul-800 font-bold" size={24} />
          </button>
      </div>
      <div className="absolute h-full right-2 flex items-center justify-center">
        <button onClick={next}>
          <IoIosArrowForward className="text-azul-800 font-bold" size={24} />
        </button>
      </div>
    </div>
  )
}
