import { useEffect, useState } from 'react';
import PLACEHOLDER_DARK__PROFILE_PIC from '../../../../assets/images/placeholders/dark_profile_pic_placeholder.jpg';
import PLACEHOLDER_PROFILE_PIC from '../../../../assets/images/placeholders/profile_pic_placeholder.jpg';

import { useToast } from '@/hooks/use-toast';
import { LuFiles } from 'react-icons/lu';
import { Chart } from './Chart';
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

  const semestresConcluidos = 1

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
    try {
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
    } catch (e) {
      toast({
        title: "Não foi possível copiar o texto!",
        description: "Por motivos de segurança do protocolo HTTPS, não foi possível copiar o texto para a sua área de transferência"
      })
    }
  }


  return(
    <div className="bg-white dark:bg-azul-800 dark:text-azul-50 rounded-md flex flex-col gap-5 py-4 px-4">
      {/** Seção do perfil do aluno */}
      <section className="flex gap-4 items-start">
        <figure>
          <img
            src={PLACEHOLDER_PROFILE_PIC}
            alt="Foto do aluno"
            loading="lazy"
            height={72}
            width={72}
            className="object-cover rounded-full cursor-pointer dark:hidden"
          />
          <img
            src={PLACEHOLDER_DARK__PROFILE_PIC}
            alt="Foto do aluno"
            loading="lazy"
            height={72}
            width={72}
            className="object-cover rounded-full cursor-pointer hidden dark:block"
          />
        </figure>

        <section className="text-xs max-w-full">
          {/* Nome do aluno */}
          <p className="text-base max-w-64 truncate font-title font-bold text-azul-400 dark:text-white">Gustavo Sales da Silva de Souza</p>

          {/* R.A. */}
          <p className="flex items-center gap-1">
            <HoverInfo
              text="RA: "
              description='Registro Acadêmico'
            />
            <span className="font-semibold text-azul-950 dark:text-neutro-50">{"9999999999999"}</span>
            <button
              aria-label="Copiar RA"
              className="bg-neutro-100 dark:bg-neutral-50 rounded p-px text-azul-800"
              onClick={() => copyToClipboard("9999999999999", "RA")}
            >
              <LuFiles className={`${isCopy.isCopyRA && "text-green-500"} text-lg`} size={16} />
            </button>
          </p>

          {/* Email */}
          <p className="flex items-center gap-1">
            E-mail: <span className="text-azul-950 dark:text-neutro-50 font-semibold">{"Exemplo@fatec.sp.gov.br"}</span>
            <button
              aria-label="Copiar e-mail"
              className="bg-neutro-100 dark:bg-neutral-50 rounded p-px text-azul-800"
              onClick={() => copyToClipboard("Exemplo@fatec.sp.gov.br", "E-mail")}
            >
              <LuFiles className={`${isCopy.isCopyEmail && "text-green-500"} text-lg`} size={16} />
            </button>
          </p>

          {/* Curso */}
          <p>Curso: <span className="text-azul-950 font-semibold dark:text-neutro-50">Análise e Desenvolvimento de Sistemas - Manhã</span></p>
        </section>
      </section>

      {/** Seção do curso do aluno */}
      <section className="">
        <h2 className="font-bold text-sm text-azul-400 dark:text-white">Progresso do Curso</h2>

        <article className="text-xs leading-normal">
          <h3 className="font-semibold text-azul-950 dark:text-neutro-50 mt-1">Semestres</h3>

          <div className="w-full max-w-[90%] flex items-center gap-1 mt-1">
            <div className={`w-full grid grid-cols-${10} bg-azul-100 dark:bg-azul-900 rounded-full text-center py-0.5 pl-2`}>
              { Array.from({ length: 10 }, (_, i) => i + 1).map(semestre => (
                <div className={`size-4 rounded-full ${semestresConcluidos >= semestre ? "bg-azul-400 text-neutro-50" : semestre <= 2 ? "bg-azul-300 dark:bg-azul-400 text-white dark:text-azul-800" : "bg-azul-200 dark:bg-azul-600 text-azul-500 dark:text-azul-300"} leading-none flex items-center justify-center`}>
                  {semestre}
                </div>
              )) }
            </div>

            <p>2/10</p>
          </div>
        </article>

        <article>
          <h3 className="sr-only">Rendimento do curso</h3>

          <section className="mt-4 flex items-center gap-2">
            <Chart text="PP" percentage={20.23} />
            <Chart text="PPI" percentage={23.85} />
            <Chart text="PR" percentage={0} percentageText="8.98" />
          </section>
        </article>
      </section>
    </div>
  )
}
