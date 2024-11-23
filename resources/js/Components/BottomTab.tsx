import { Link, usePage } from '@inertiajs/react';

import { GoHome } from "react-icons/go";
import { LuCalendarDays, LuFileSearch2, LuGraduationCap } from 'react-icons/lu';
import { TbFileDownload } from "react-icons/tb";

const links = [
  {
    linkTo: "aluno/home",
    nome: "Home",
    Icon: GoHome,
  },
  {
    linkTo: "aluno/notas",
    nome: "Notas",
    Icon: LuFileSearch2,
  },
  {
    linkTo: "aluno/horario",
    nome: "Horário",
    Icon: LuCalendarDays,
  },
  {
    linkTo: "aluno/materias",
    nome: "Matérias",
    Icon: LuGraduationCap,
  },
  {
    linkTo: "aluno/solicitacoes",
    nome: "Solicitações",
    Icon: TbFileDownload,
  },
]

export default function BottomTab(){
  const { url } = usePage()
  console.log(url)

  return(
    <footer className="w-full h-fit sticky sm:hidden bottom-0 z-50 shadow bg-white dark:bg-azul-900 rounded-t-md grid grid-cols-5 py-3 px-2">
      {
        links.map(({ Icon, linkTo, nome }, index) => (
          <Link
            href={route(linkTo)}
            key={index}
            className={`flex flex-col items-center justify-center gap-px font-medium ${url === ("/"+linkTo) ? "text-vermelho-500" : "text-azul-800"} dark:text-neutro-50`}
            disabled={url === ("/"+linkTo)}
          >
          {/* TODO: Aqui, se estamos na mesma rota, o ícone tem que aparecer como fill */}
            <Icon size={24} className="text-[8px]"/>
            <p className="text-xs">{nome}</p>

          </Link>
        ))
      }
    </footer>
  )
}
