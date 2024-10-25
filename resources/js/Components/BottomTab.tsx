import { Link } from '@inertiajs/react';
import { BsBackpack, BsBackpackFill } from "react-icons/bs";
import { GoHome, GoHomeFill, } from "react-icons/go";
import { LuFileSearch2, LuMailPlus, LuSettings } from 'react-icons/lu';

const links = [
  {
    linkTo: "/home",
    nome: "Home",
    Icon: {
      normal: GoHome,
      fill: GoHomeFill,
    },
  },
  {
    linkTo: "/notas",
    nome: "Notas",
    Icon: {
      normal: LuFileSearch2,
      fill: LuFileSearch2,
    },
  },
  {
    linkTo: "/materias",
    nome: "Matérias",
    Icon: {
      normal: BsBackpack,
      fill: BsBackpackFill,
    },
  },
  {
    linkTo: "/solicitacoes",
    nome: "Solicitações",
    Icon: {
      normal: LuMailPlus,
      fill: LuMailPlus,
    },
  },
  {
    linkTo: "/settings",
    nome: "Ajustes",
    Icon: {
      normal: LuSettings,
      fill: LuSettings,
    },
  },
]

export default function BottomTab(){
  return(
    <footer className="w-full h-fit sticky sm:hidden bottom-0 z-50 shadow bg-white dark:bg-azul-900 rounded-t-md flex items-center justify-between py-3 px-4">
      {
        links.map(({ Icon, linkTo, nome }, index) => (
          <Link
            href={linkTo}
            className="flex flex-col items-center justify-center gap-px font-medium text-azul-800 dark:text-neutro-50"
          >
          {/* TODO: Aqui, se estamos na mesma rota, o ícone tem que aparecer como fill */}
            <Icon.normal size={24} className="text-[8px]"/>
            <p className="text-xs">{nome}</p>

          </Link>
        ))
      }
    </footer>
  )
}
