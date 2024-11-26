import { AuthenticatedLayout } from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";

import { Head } from "@inertiajs/react";
import { DocumentCollapsible } from "./Components/DocumentCollapsible";

import atestadoMatriculaSimples from '@/files/atestado_matricula_simples.pdf';

const documentosASolicitar: Documentos[] = [
  {
    title: "Atestado de Matrícula Ingressante",
    description: "Comprova que o aluno foi admitido e está matriculado no primeiro semestre do curso."
  },
  {
    title: "Atestado de Período",
    description: "Confirma o semestre em que o aluno está cursando atualmente."
  },
  {
    title: "Atestado de Previsão de Conclusão",
    description: "Apresenta uma estimativa de quando o aluno deverá concluir o curso."
  },
  {
    title: "Declaração de Conclusão",
    description: "Declara que o aluno já finalizou todas as exigências do curso, mas ainda não possui o diploma oficial."
  },
  {
    title: "Certificado de Conclusão de Curso",
    description: "Documento oficial que confirma a conclusão do curso e a obtenção do diploma."
  },
  {
    title: "Atestado Matrícula com Portaria de Autorização",
    description: "Confirma a matrícula e inclui a portaria de autorização do curso, que atesta a validade legal da formação oferecida pela instituição."
  },
  {
    title: "Atestado Geral",
    description: "Documento que comprova de forma abrangente o status acadêmico do aluno, incluindo informações sobre a matrícula, disciplinas cursadas, desempenho, e o histórico geral no curso."
  },
]

const documentosParaBaixar: Documentos[] = [
  {
    title: "Atestado de Matrícula Simples",
    description: "Certifica que o aluno está matriculado no curso, sem detalhes adicionais.",
    status: "Approved",
    downloadLink: atestadoMatriculaSimples
  },
  {
    title: "Atestado de Matrícula com Disciplinas",
    description: "Informa que o aluno está matriculado, incluindo as disciplinas em que está inscrito.",
    status: "In Process"
  },
]

interface Documentos {
  title: string
  description: string
  downloadLink?: string
  status?: 'Pending' | 'In Process' | 'Approved' | 'Rejected'
}

export default function Solicitacoes(){
  const [tab, setTab] = useState<'solicitacoes' | 'mySolicitacoes'>('solicitacoes')
  return(
    <>
      <Head title="Solicitar documentos" />
      <AuthenticatedLayout>
        <section>

          <section className="flex w-full bg-zinc-200 dark:bg-azul-800 rounded overflow-hidden mb-4">
            <button
              onClick={() => setTab(state => 'solicitacoes')}
              className={`${tab === "solicitacoes" && "bg-vermelho-500 text-white dark:text-white font-semibold font-title"} flex-1 rounded py-px`}
            >Solicitações</button>


            <button
              onClick={() => setTab(state => 'mySolicitacoes')}
              className={`${tab === "mySolicitacoes" && "bg-vermelho-500 text-white dark:text-white font-semibold font-title"} flex-1 rounded py-px`}
              >Minhas Solicitações</button>
          </section>


          <section className="flex flex-col gap-2">
            <h3>Documentos</h3>
            {
              tab === "solicitacoes" &&
              documentosASolicitar.map((documento, index) => (
                <div className="grid grid-cols-[9fr,1fr] place-items-start dark:text-black">
                  <DocumentCollapsible
                    title={documento.title}
                    description={documento.description}
                    index={index + 1}
                  />
                  <button className="h-8 p-1.5 bg-white text-sm border-l border-azul-800">
                    <a href="#">Solicitar</a>
                  </button>
                </div>
              ))
            }

            {
              tab === 'mySolicitacoes' &&
              documentosParaBaixar.map((documento, index) => (
                <div className="flex flex-col gap-2">
                  <DocumentCollapsible
                    title={documento.title}
                    description={documento.description}
                    index={index + 1}
                    downloadLink={documento.downloadLink}
                    status={documento.status}
                  />
                </div>
              ))
            }
          </section>
        </section>
      </AuthenticatedLayout>
    </>
  )
}
