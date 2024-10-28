import { useState } from "react";

import { data } from './data/notas-parciais';

import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CardNotas from "./Components/CardNotas";
import CicloCheckbox from "./Components/Checkbox";


export default function Notas(){
  // Aqui, o estado tem que ser o ciclo atual do aluno
  const [filtro, setFiltro] = useState(0)

  const handleSelecionarCiclo = (i: number) => {
    setFiltro(i)
  };

  return(
    <>
      <Head title="Notas parciais do Estudante" />
      <AuthenticatedLayout>
        {/* Filtro */}
        <section className="min-w-full flex items-center justify-between bg-neutro-100 dark:bg-azul-800 rounded-md max-w-full overflow-y-hidden overflow-x-scroll">
          {
            data.map(({ ciclo }, i) => (
              <CicloCheckbox
                key={ciclo}
                text={`${ciclo}ºciclo`}
                checked={filtro === i}
                onChange={() => handleSelecionarCiclo(i)}
              />
            ))
          }
        </section>

        <section className="mt-4 flex flex-col items-end">
          <h2 className="leading-normal text-lg w-full text-left">Histórico Completo</h2>

          <div className="mt-1 flex flex-col gap-2">
            {
              data.map(({ ciclo, materias }) => {
                return filtro + 1 === ciclo && materias.map((materia, i) => (
                  <CardNotas key={i} materia={materia} />
                ))
              })
            }
          </div>

          {/* Link para download do doc em pdf ou botão para criar documento */}

          <a
            href=""
            className="p-2 bg-vermelho-700 rounded-md hover:bg-vermelho-500 cursor-pointer transition-all mt-4 text-white font-bold"
            download
          >
            Baixar Histórico em PDF
          </a>
        </section>

        {/* Tabela */}
      </AuthenticatedLayout>
    </>
  )
}
