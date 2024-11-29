import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { LuChevronLeft } from "react-icons/lu";

import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";

import { data } from './data/horarios-fake';

import { CardAtalho } from './Components/CardAtalho';
import DiaCheckbox from "./Components/Checkbox";

import { Antenna } from './Components/icons/Antenna';
import { Book } from './Components/icons/Book';
import { Calendar } from './Components/icons/Calendar';
import { UserMinus } from './Components/icons/UserMinus';

const dias = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

const AulaItem = ({ aula }: {
  aula: {
    hora: string;
    materia: string;
    sigla: string;
    prof: string;
    sala: string;
  }
}) => (
  <li key={aula.sigla} className="flex items-center gap-4 p-2 bg-white dark:bg-azul-800 rounded shadow text-sm">
    <div className="p-1 text-neutro-500 dark:text-neutro-50">
      <p>{aula.hora}</p>
      <p className="text-neutro-700 dark:text-neutro-300">{aula.sigla}</p>
    </div>
    <div className="bg-neutral-50 dark:bg-azul-700 border-l-[1rem] border-azul-300 pl-2 flex-1 py-1">
      <h4>{aula.materia}</h4>
      <p className="text-xs">{`${aula.prof} - Sala ${aula.sala}`}</p>
    </div>
  </li>
);

const links = [
  {
    id: '1',
    titulo: "Notas Parciais",
    descricao: "Confira suas notas mais recentes",
    icon: Antenna,
    linkTo: "aluno/notas"
  },
  {
    id: '2',
    titulo: "Faltas Parciais",
    descricao: "Fique de olho na frequência",
    icon: UserMinus,
    linkTo: "aluno/faltas"
  },
  {
    id: '3',
    titulo: "Histórico Completo",
    descricao: "Histórico completo das disciplinas",
    icon: Book,
    linkTo: "aluno/historico"
  },
  {
    id: '4',
    titulo: "Horário",
    descricao: "Seu horário atualizado",
    icon: Calendar,
    linkTo: "aluno/consulta"
  },
]

export default function Consulta(){
  const [diaSelecionado, setDiaSelecionado] = useState<string>("domingo")

  useEffect(() => {
    const diaDeHoje = new Date().toLocaleDateString("pt-BR", { weekday: "long" })
    console.log(diaDeHoje)
    if(diaDeHoje === 'domingo'){
      setDiaSelecionado("segunda-feira")
    } else {
      setDiaSelecionado(diaDeHoje)
    }
  }, [])

  function handleAlterarDia(dia: string){
    setDiaSelecionado(dia)
  }

  return(
    <>
      <Head title="Horário" />
      <AuthenticatedLayout>
        <button onClick={() => history.back()}>
          <LuChevronLeft size={32} />
        </button>
          <h2 className="mt-4 text-lg font-title font-semibold leading-normal">Consultas</h2>
        <section>
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-3 gap-x-4">
          {links.map(link =>(
            <li>
              <CardAtalho
                Icon={link.icon}
                href={route(link.linkTo)}
                title={link.titulo}
                description={link.descricao}
              />
            </li>
          ))}
        </ul>
        </section>
        <section className="pb-4 mt-4">
          <h2 className="text-lg font-title font-semibold leading-normal">Horário</h2>
          <div className="w-full flex items-center gap-2">
            {
              dias.map(dia => (
                <DiaCheckbox
                  text={(dia[0]+dia[1]+dia[2]).toUpperCase()}
                  checked={dia === diaSelecionado}
                  onChange={() => handleAlterarDia(dia)}
                  className="size-14 text-sm"
                />
              ))
            }
          </div>
        </section>
        <section className="mt-1.5 min-h-96">
          {data.some(
            dia => dia.dia === diaSelecionado &&
            (
              // Se tiver algum erro de Element Implicitly é um falso negativo!
              dia["matutino"] !== undefined && dia["matutino"].length > 0 ||
              dia["mat/vesp"] !== undefined && dia["mat/vesp"].length > 0 ||
              dia["vespertino"] !== undefined && dia["vespertino"].length > 0 ||
              dia["vesp/not"] !== undefined && dia["vesp/not"].length > 0 ||
              dia["noturno"] !== undefined && dia["noturno"].length > 0
            )) ? (
            <>
              {data.some(dia => dia.dia === diaSelecionado && dia["matutino"] && dia["matutino"].length > 0) && (
                <>
                  <h3>Matutino</h3>
                  <hr className="h-0.5 w-full bg-neutro-100 dark:bg-azul-800 my-2" />
                  <ul className="flex flex-col gap-2">
                    {data.map(dia =>
                      dia.dia === diaSelecionado &&
                      dia.matutino?.map(aula => (
                        <AulaItem key={aula.sigla} aula={aula} />
                      ))
                    )}
                  </ul>
                </>
              )}

              {data.some(dia => dia.dia === diaSelecionado && dia["mat/vesp"] && dia["mat/vesp"].length > 0) && (
                <>
                  <h3 className="mt-3">Matutino/Vespertino</h3>
                  <hr className="h-0.5 w-full bg-neutro-100 dark:bg-azul-800 my-2" />
                  <ul className="flex flex-col gap-2">
                    {data.map(dia =>
                      dia.dia === diaSelecionado &&
                      dia["mat/vesp"]?.map(aula => (
                        <AulaItem key={aula.sigla} aula={aula} />
                      ))
                    )}
                  </ul>
                </>
              )}

              {data.some(dia => dia.dia === diaSelecionado && dia["vespertino"] && dia["vespertino"].length > 0) && (
                <>
                  <h3 className="mt-3">Vespertino</h3>
                  <hr className="h-0.5 w-full bg-neutro-100 dark:bg-azul-800 my-2" />
                  <ul className="flex flex-col gap-2">
                    {data.map(dia =>
                      dia.dia === diaSelecionado &&
                      dia["mat/vesp"]?.map(aula => (
                        <AulaItem key={aula.sigla} aula={aula} />
                      ))
                    )}
                  </ul>
                </>
              )}

              {data.some(dia => dia.dia === diaSelecionado && dia["vesp/not"] && dia["vesp/not"].length > 0) && (
                <>
                  <h3 className="mt-3">Vespertino/Noturno</h3>
                  <hr className="h-0.5 w-full bg-neutro-100 dark:bg-azul-800 my-2" />
                  <ul className="flex flex-col gap-2">
                    {data.map(dia =>
                      dia.dia === diaSelecionado &&
                      dia["mat/vesp"]?.map(aula => (
                        <AulaItem key={aula.sigla} aula={aula} />
                      ))
                    )}
                  </ul>
                </>
              )}

              {data.some(dia => dia.dia === diaSelecionado && dia["noturno"] && dia["noturno"].length > 0) && (
                <>
                  <h3 className="mt-3">Vespertino/Noturno</h3>
                  <hr className="h-0.5 w-full bg-neutro-100 dark:bg-azul-800 my-2" />
                  <ul className="flex flex-col gap-2">
                    {data.map(dia =>
                      dia.dia === diaSelecionado &&
                      dia["mat/vesp"]?.map(aula => (
                        <AulaItem key={aula.sigla} aula={aula} />
                      ))
                    )}
                  </ul>
                </>
              )}

            </>
          ) : (
            <h3>Você não tem aula no {diaSelecionado}</h3>
          )}
        </section>
      </AuthenticatedLayout>
    </>
  )
}
