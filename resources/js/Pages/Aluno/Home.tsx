import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { CardAtalho } from './Components/CardAtalho';
import { CarrosselAvisos } from './Components/CarrosselAvisos';
import PerfilAluno from './Components/PerfilAluno';

import { Antenna } from './Components/icons/Antenna';
import { Book } from './Components/icons/Book';
import { Calendar } from './Components/icons/Calendar';
import { UserMinus } from './Components/icons/UserMinus';

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
    linkTo: "aluno/notas" //futuramente, faltas
  },
  {
    id: '3',
    titulo: "Histórico Completo",
    descricao: "Histórico completo das disciplinas",
    icon: Book,
    linkTo: "aluno/notas" //futuramente, historico
  },
  {
    id: '4',
    titulo: "Horário",
    descricao: "Seu horário atualizado",
    icon: Calendar,
    linkTo: "aluno/horario"
  },
]

export default function Home() {
    return (
        <>
          <Head title="Home" />
          <AuthenticatedLayout>
              <div className="inset-0">

                <PerfilAluno />

                <section className="mt-4">
                  <h2 className="sm:text-xl">Mural de Avisos!</h2>
                  <CarrosselAvisos />
                </section>

                <section className="mt-4">
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
              </div>
          </AuthenticatedLayout>
        </>
    );
}
