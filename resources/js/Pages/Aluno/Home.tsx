import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import { CarrosselAvisos } from './Components/CarrosselAvisos';
import PerfilAluno from './Components/PerfilAluno';

export default function Home() {
    return (
        <>
          <Head title="Home" />
          <AuthenticatedLayout>
              <main className="inset-0 sm:hidden">
                <PerfilAluno />
                <section>
                  <h2>Mural de Avisos!</h2>

                  <CarrosselAvisos />
                </section>
              </main>
          </AuthenticatedLayout>
        </>
    );
}
