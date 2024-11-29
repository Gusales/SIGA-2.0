import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

import { LuChevronLeft, LuChevronRight, LuLayoutGrid, LuList } from "react-icons/lu";


interface CardDisciplinaProps {
  materia: {
    sigla: string,
    nome: string
    professor: string,
  }
}

function ListCardDisciplina({ materia: { sigla, nome, professor } }: CardDisciplinaProps){
  return(
    <article className="w-full gap-2 bg-white dark:bg-azul-800 rounded-md overflow-hidden flex items-center shadow-sm mt-4">
      <div className="h-16 bg-azul-300 w-4" />
      <div className="size-11 rounded-md bg-neutro-50 dark:bg-azul-300 flex items-center justify-center">
        <p className="leading-normal font-title dark:text-neutro-800">{sigla}</p>
      </div>

      <div className="flex-1 leading-normal">
        <h3 className="font-title text-xs dark:text-neutro-50">{nome}</h3>
        <p className="text-[10px] dark:text-neutro-100">{professor}</p>
      </div>

      <button className="mr-6">
        <LuChevronRight size={24} />
      </button>
    </article>
  )
}

const materias = [
  {
    sigla: "CO",
    nome: "Comunicação e Expressão",
    professor: "Helena Damelio"
  },
  {
    nome: "Contabilidade",
    sigla: "CO",
    professor: "Maria Irene",
  },
  {
    nome: "Inglês II",
    sigla: "IN",
    professor: "Vanderlei Souza",
  },
  {
    nome: "Cálculo",
    sigla: "CA",
    professor: "Luciano Condori",
  },
  {
    nome: "Linguagem de Programação",
    sigla: "LP",
    professor : "Sandra Geroldo",
  },
  {
    nome: "Engenharia de Software I",
    sigla: "IE",
    professor: "Priscila Faccioli",
  },
  {
    nome: "Sistemas de Informação",
    sigla: "IS",
    professor: "Ana Travessos",
  }
]

function ListView(){
  return(
    <ul className="flex flex-col gap-2">
      {
        materias.map(mat => (
          <li>
            <ListCardDisciplina materia={mat} />
          </li>
        ))
      }
    </ul>
  )
}

export default function Disciplinas(){
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
      <Head title="Disciplinas" />
      <AuthenticatedLayout>
        <button onClick={() => history.back()}>
          <LuChevronLeft size={32} />
        </button>
          <h2 className="mt-3 text-lg font-title font-semibold leading-normal">Suas disciplinas</h2>

          <div className="w-full flex items-center justify-end">
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

          <section>
            {
              view === 'list'
              && (<ListView />)
            }
          </section>
      </AuthenticatedLayout>
    </>
  )
}
