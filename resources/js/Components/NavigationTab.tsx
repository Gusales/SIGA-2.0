import { Link, usePage } from '@inertiajs/react';

import { CircleUser } from 'lucide-react';
import { GoHome } from "react-icons/go";
import { LuFileSearch2, LuGraduationCap } from 'react-icons/lu';
import { TbFileDownload } from "react-icons/tb";

const links = [
  {
    linkTo: "aluno/home",
    nome: "Home",
    Icon: GoHome,
  },
  {
    linkTo: "aluno/consulta",
    nome: "Consultas",
    Icon: LuFileSearch2,
  },
  {
    linkTo: "aluno/disciplinas",
    nome: "Disciplinas",
    Icon: LuGraduationCap,
  },
  {
    linkTo: "aluno/solicitacoes",
    nome: "Solicitações",
    Icon: TbFileDownload,
  },
  {
    linkTo: "aluno/consulta",
    nome: "Perfil",
    Icon: CircleUser,
  },
]

export default function Tab(){
  const { url } = usePage()
  console.log(url)

  return(
    <nav className="w-full h-fit mt-10 fixed sm:static bottom-0 z-50 shadow sm:shadow-none bg-white sm:bg-transparent dark:bg-azul-900 sm:dark:bg-transparent rounded-t-md grid grid-cols-5 py-3 px-2 sm:flex flex-col sm:gap-2">
      {
        links.map(({ Icon, linkTo, nome }, index) => (
          <Link
            href={route(linkTo)}
            key={index}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-px sm:gap-2 font-medium group ${url === ("/"+linkTo) || ("/"+linkTo === '/aluno/consulta' && (url === '/aluno/faltas' || url === '/aluno/historico' )) ? "text-vermelho-500" : "text-azul-800 dark:text-neutro-50"}`}
            disabled={url === ("/"+linkTo)}
          >
            <Icon size={24} className="text-[8px] sm:text-base"/>
            <p className="text-xs sm:text-base group-hover:underline">{nome}</p>

          </Link>
        ))
      }
    </nav>
  )
}
