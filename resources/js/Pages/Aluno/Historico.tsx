import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { LuChevronLeft, LuLayoutGrid, LuList } from "react-icons/lu";
import { SelectSemestre } from "./Components/SelectSemestre";

import { useState } from "react";
import { data } from "./data/notas-parciais";

const materiasPorSemestre = [
  ...data,

]

interface CardView {
  materia: {
    sigla: string;
    nome: string;
    faltas: number;
    freq: string;
    nota: number;
    status: string;
  }
}

function ListCardView({ materia }: CardView){
  return(
    <article className="w-full min-h-20 bg-white dark:bg-azul-800 text-black dark:text-neutro-50 grid grid-cols-[60px,1fr] rounded-md text-xs shadow">
        <div className="min-h-full flex items-center justify-center px-2">
          <p className="text-[10px]">{materia.sigla.toUpperCase()}</p>
        </div>
        <div className="flex-1 flex items-center justify-between gap-1 pr-2.5 pl-2 border-l border-l-neutro-200 dark:text-neutro-100">
          <div>
            <h4 className="font-semibold">{materia.nome}</h4>
            <p className="font-medium">N: <span className={`font-bold ${materia.nota > 6 ? "text-green-400" : "text-vermelho-500"}`}>{materia.nota}</span> - Faltas: <b>{materia.faltas}</b> - Frequência: <b>{materia.freq}%</b></p>
          </div>
          <p className={`${materia.status === "Aprovado" ? "bg-emerald-500 dark:text-neutro-800" : materia.status === 'Dispensado' ? "bg-emerald-400 dark:text-neutro-800" : materia.status === "Cursando" ? "bg-crayola dark:text-neutro-800" : "bg-vermelho-700 text-[8px] text-neutro-50 dark:text-neutro-100"} py-1 px-4 rounded-full`}>{materia.status}</p>
        </div>
      </article>
  )
}

function GridCardView({ materia }: CardView){
  return (
      <article className="w-full min-h-20 bg-white dark:bg-azul-800 text-black dark:text-neutro-50 rounded-md text-xs shadow px-2 pt-4">
        <div className="flex items-center justify-between px-2 text-[10px]">
          <p className="text-azul-500 dark:text-azul-300 font-medium">{materia.sigla.toUpperCase()}</p>
          <p>AS: 04</p>
        </div>
        <div className="flex flex-col gap-1 pr-2.5 pl-2 min-h-40 dark:text-neutro-100">
          <div className="mb-2">
            <h4 className="font-semibold mb-4 mt-2 text-sm">{materia.nome}</h4>
            <p className="font-medium">NF: <span className={`font-bold ${materia.nota > 6 ? "text-green-400" : "text-vermelho-500"}`}>{materia.nota}</span> - FR: <b>{materia.freq}%</b></p>
          </div>
          <p className={`${materia.status === "Aprovado" ? "bg-emerald-500 dark:text-neutro-800" : materia.status === 'Dispensado' ? "bg-emerald-400 dark:text-neutro-800" : materia.status === "Cursando" ? "bg-crayola dark:text-neutro-800" : "bg-vermelho-700 text-[8px] text-neutro-50 dark:text-neutro-100"} py-1 px-4 rounded-full w-fit`}>{materia.status}</p>
        </div>
      </article>
  )
}

export default function Historico(){
  const [view, setView] = useState<'grid' | 'list'>('list')

  function handleSwitchView(){
    if(view === 'grid'){
      setView('list')
    }
    else {
      setView('grid')
    }
  }
  return(
    <>
      <Head title="Histórico" />
      <AuthenticatedLayout>
        <button onClick={() => history.back()}>
          <LuChevronLeft size={32} />
        </button>
        <h2 className="mt-4 text-xs font-title font-semibold leading-normal text-neutro-800 dark:text-neutro-200">Semestres</h2>
        <div className="w-full flex justify-between items-center">
          <SelectSemestre semestres={[1, 2, 3, 4, 5, 6]} />

          <button
            className="mt-2 p-3 rounded-md shadow-sm bg-white dark:bg-azul-800 text-azul-500 dark:text-azul-300"
            onClick={handleSwitchView}
            >
            {view === 'list' ? (
              <LuLayoutGrid className="" size={24} />
            ) : (
              <LuList className="" size={24} />
            )}
          </button>
        </div>

        <section className="mt-4 space-y-2">
          {materiasPorSemestre.map(({ materias, ciclo }) => (
            <>
              <h3>{ciclo} Semestre</h3>
              {view === 'list' ? (
                <ul className="space-y-1">
                  {materias.map(materia => (
                    <ListCardView materia={materia} />
                  ))}
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-3">
                  {materias.map(materia => (
                    <GridCardView materia={materia} />
                  ))}
                </ul>
              )}
            </>
          ))}
        </section>
      </AuthenticatedLayout>
    </>
  )
}
