import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { LuArrowUpDown, LuChevronLeft } from "react-icons/lu";
import { FileSearch } from "./Components/icons/FileSearch";
import { FileSearchDark } from "./Components/icons/FileSearchDark";

const materiasEFaltas = [
  {
    sigla: "CAL014",
    materia: "Cálculo",
    presenca: 50,
    faltas: 2,
  },
  {
    sigla: "COM036",
    materia: "Comunicação e Expressão",
    presenca: 56,
    faltas: 8,
  },
  {
    sigla: "CON005",
    materia: "Contabilidade",
    presenca: 30,
    faltas: 0,
  },
  {
    sigla: "CON005",
    materia: "Engenharia de Software I",
    presenca: 70,
    faltas: 0,
  },
  {
    sigla: "ILP054",
    materia: "Linguagem de Programação",
    presenca: 54,
    faltas: 10,
  },
  {
    sigla: "ILP058",
    materia: "Programação Web",
    presenca: 0,
    faltas: 0,
  },
  {
    sigla: "ING152",
    materia: "Inglês II",
    presenca: 18,
    faltas: 10,
  },
  {
    sigla: "ISI020",
    materia: "Sistemas de Informação",
    presenca: 55,
    faltas: 5,
  },
]

export default function FaltasParciais(){
  return(
    <>
      <Head title="Faltas parciais" />
      <AuthenticatedLayout>
        <button onClick={() => history.back()}>
          <LuChevronLeft size={32} />
        </button>
          <h2 className="mt-4 text-lg font-title font-semibold leading-normal">Faltas Parciais</h2>

          <section>
            <table className="w-full text-xs shadow rounded overflow-hidden">
              <thead className="font-title text-sm bg-azul-100 dark:bg-azul-500">
                <tr className="grid grid-cols-[4rem,6.8rem,5.4rem,5rem,2.3rem] gap-0.5">
                  <th className="w-fit flex items-center gap-px p-3"><p>Sigla</p> <LuArrowUpDown className="text-azul-500 dark:text-neutro-100" size={12} /></th>
                  <th className="w-fit flex items-center gap-px p-3"><p>Disciplina</p> <LuArrowUpDown className="text-azul-500 dark:text-neutro-100" size={12} /></th>
                  <th className="w-fit flex items-center gap-px p-3"><p>Presenças</p> <LuArrowUpDown className="text-azul-500 dark:text-neutro-100" size={12} /></th>
                  <th className="w-fit flex items-center gap-px p-3"><p>Ausências</p> <LuArrowUpDown className="text-azul-500 dark:text-neutro-100" size={12} /></th>
                  <th className="w-fit flex p-3"></th>
                </tr>
              </thead>
              <tbody className="grid gap-px">
                {
                  materiasEFaltas.map(materia => (
                    <tr className="grid grid-cols-[4rem,6.8rem,5.4rem,5rem,2.3rem] shadow text-center bg-white dark:bg-azul-700 text-neutro-800 dark:text-neutro-100">
                      <th className="p-3">{materia.sigla}</th>
                      <th className="text-left p-3">{materia.materia}</th>
                      <th className="p-3">{materia.presenca}</th>
                      <th className="p-3">{materia.faltas}</th>
                      <th className="w-fit flex p-3">
                        <button>
                          <FileSearch className="dark:hidden"/>
                          <FileSearchDark className="hidden dark:block"/>
                        </button>
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </section>

          <section className="p-2 mt-8 text-sm bg-white dark:bg-azul-800 dark:text-neutro-100 shadow rounded">
            <h3 className="text-vermelho-400 uppercase font-semibold">Atenção!</h3>
            <p>
              <ul className="list-disc list-inside mb-8">
                <li>Este documento <b>não possui validade como histórico escolar.</b></li>
                <li>Os valores apresentados são temporários e podem ser alterados sem aviso prévio.</li>
              </ul>

              Sobre a contabilização das presenças:
              <ul className="list-disc list-inside">
                <li className="">Inclui participação nas aulas regulares.</li>
                <li className="">Considera compensações referentes a ingresso tardio.</li>
              </ul>
            </p>
          </section>
      </AuthenticatedLayout>
    </>
  )
}
