import { useEffect, useState } from 'react';
import PLACEHOLDER_PROFILE_PIC from '../../../../assets/images/placeholders/profile_pic_placeholder.jpg';

import { useToast } from '@/hooks/use-toast';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';
import HoverInfo from './HoverInfo';

/**
 * TODO: ESSE COMPONENTE DEVE RECEBER PROPS
 * Nome do Aluno;
 * RA;
 * Email Constitucional;
 * Curso;
 */

export default function PerfilAluno(){
  // Aqui verifica se o RA ou Email foi copiado
  const [isCopy, setIsCopy] = useState({
    isCopyRA: false,
    isCopyEmail: false
  })

  // Exibe a mensagem de texto copiado
  const { toast } = useToast()

  useEffect(() => {
    let timer
    if (isCopy.isCopyEmail) {
      timer = setTimeout(() => {
        setIsCopy((prevState) => ({
          ...prevState,
          isCopyEmail: false
        }));
      }, 5000);
    } else {
      timer = setTimeout(() => {
        setIsCopy((prevState) => ({
          ...prevState,
          isCopyRA: false
          }));
        }, 5000);;
    }

    return () => clearTimeout(timer)
  }, [isCopy]);

  // Função para copiar as informações para o ctrl c e v
  function copyToClipboard(text: string, type: "E-mail" | "RA"){
    navigator.clipboard.writeText(text);

    if(type === "E-mail"){
      setIsCopy((state) => ({
        ...state,
        isCopyEmail: true
      }))

    } else {
      setIsCopy((state) => ({
        ...state,
        isCopyRA: true
      }))
    }

    // Aqui, exibe a mensagem para o usuário
    toast({
      title: `${type} copiado para a área de transferência`
    })
  }

  return(
    <div className="bg-white dark:bg-azul-800 dark:text-azul-50 rounded-md flex flex-col gap-5 py-4 px-4">
      {/** Seção do perfil do aluno */}
      <section className="flex gap-4 items-center">
        <figure className="size-20">
          <img
            src={PLACEHOLDER_PROFILE_PIC}
            alt="Foto do aluno"
            loading="lazy"
            className="object-cover rounded-full cursor-pointer"
          />
        </figure>

        <section className="text-xs max-w-full">
          <p className="text-base w-52 truncate">Gustavo Sales da Silva de Souza Sales da Silva de Souza</p>
          <p className="flex items-center gap-1">
            <HoverInfo
              text="RA"
              description='Registro Acadêmico'
            />
            <span className="font-bold">{"9999999999999"}</span>
            <button title="Copiar RA" onClick={() => copyToClipboard("9999999999999", "RA")}>
              { isCopy.isCopyRA ? (<LuCopyCheck size={13} />) : (<LuCopy size={13} />) }
            </button>
          </p>
          <p className="flex items-center gap-1">
            E-mail FATEC: <span className="text-azul-500 dark:text-cyan-300 underline underline-offset-2">{"Exemplo@fatec.sp.gov.br"}</span>
            <button aria-label="Copiar e-mail" onClick={() => copyToClipboard("Exemplo@fatec.sp.gov.br", "E-mail")}>
            { isCopy.isCopyEmail ? (<LuCopyCheck size={13} />) : (<LuCopy size={13} />) }
            </button>
          </p>
          <p>Curso: Análise e Desenvolvimento de Sistemas - Manhã</p>
        </section>
      </section>

      {/** Seção do curso do aluno */}
      <section className="flex gap-2">
        <h2 className="sr-only">Informações sobre o curso</h2>

        <article>
          <h3 className="font-semibold">Rendimento do Curso</h3>
          <div className="text-sm bg-neutro-50 dark:bg-azul-950 rounded-md mt-1 p-2">
            <p>
              <HoverInfo
                text="PP:"
                description="Percentual de Progressão que equivale ao percentual realizado no curso pela carga horária das disciplinas aprovadas"
              /> 99% </p>
            <p>
              <HoverInfo
                text="PR:"
                description="Percentual de Rendimento que equivale a nota média do estudante no curso"
              /> 99% </p>
            <p>
              <HoverInfo
                text="PP (intercâmbio):"
                description="Percentual de Progressão que equivale ao percentual realizado no curso pela carga horária das disciplinas aprovadas"
              /> 99% </p>
            <p>
              <HoverInfo
                text="PR (intercâmbio):"
                description="Percentual de Rendimento que equivale a nota média do estudante no curso"
              /> 99% </p>
          </div>
        </article>

        <article className="flex flex-col">
          <h3 className="font-semibold">Prazo de Integralização</h3>
          <div className="text-sm bg-neutro-50 dark:bg-azul-950 rounded-md mt-1 p-2 flex-1">
            <p>Cursando: 1</p>
            <p>Máximo: 10</p>
            <p>Faltam: 9</p>
          </div>
        </article>
      </section>
    </div>
  )
}
