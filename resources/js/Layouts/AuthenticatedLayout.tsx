
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

import { Header } from '@/Components/Header';
import BottomTab from '@/Components/NavigationTab';
import { Toaster } from '@/Components/ui/toaster';

export function AuthenticatedLayout({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;


    return (
      <div className="relative inset-0 *:transition-colors bg-neutro-50 dark:bg-azul-950">
        <Header />

        <main className="mt-16 pb-20">
          { children }
        </main>

        <BottomTab />
        <Toaster />
      </div>
    );
}
