import CPS_RED from '../../assets/images/logos/cps_red.png';
import CPS_WHITE from '../../assets/images/logos/cps_white.png';
import ApplicationLogo from './ApplicationLogo';
import ApplicationLogoWhite from './ApplicationLogoWhite';
import ToogleDarkMode from './ToogleDarkMode';

export function Header(){
  return(
    <header className="px-4 fixed top-0 z-50 w-full max-h-16 py-1 flex justify-between items-center bg-white dark:bg-azul-900 shadow">
          <figure
            className="max-w-fit max-h-fit flex flex-col flex-1 items-center justify-center gap-2">
            <ApplicationLogo w={100} h={60} className="dark:hidden" />
            <ApplicationLogoWhite w={100} h={60} className="hidden dark:block" />
          </figure>

          <section className="hidden flex-col flex-1 text-center sm:flex dark:text-azul-50">
            <h2 className="text-xl">Faculdade de Tecnologia - FATEC</h2>
            {/* Caso aluno */}
            <p className="text-lg">Campus <b>{"Carapicuíba"}</b></p>
          </section>

          <section className="ml-4 flex gap-4 items-center flex-none justify-between sm:flex-none sm:ml-0 sm:justify-normal">

            <figure className="hidden md:block">
              <a href="https://www.cps.sp.gov.br/" target="_blank">
                <img src={CPS_RED} alt="Centro Paula Souza" className="sm:w-24 w-14 dark:hidden" />
                <img src={CPS_WHITE} alt="Centro Paula Souza" className="sm:w-24 w-14 hidden dark:block" />
              </a>
            </figure>

            <ToogleDarkMode />
          </section>
        </header>
  )
}
