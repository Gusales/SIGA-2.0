import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

import { data } from './data/horarios-fake';

import DiaCheckbox from "./Components/Checkbox";

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
    <div className="bg-neutral-50 dark:bg-azul-700 border-l-[1rem] border-azul-300 pl-2 flex-1">
      <h4>{aula.materia}</h4>
      <p className="text-xs">{`${aula.prof} - Sala ${aula.sala}`}</p>
    </div>
  </li>
);

export default function Horario(){
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
        <section className="border-b border-neutral-600 pb-4">
          <h2 className="sr-only">Selecione um dia:</h2>
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
        <section className="mt-1.5">
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
