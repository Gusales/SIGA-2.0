import PROFILE_PIC_PLACEHOLDER from '../../assets/images/placeholders/profile_pic_placeholder.jpg';

import NavigationMenu from '@/Components/NavigationTab';

export default function MenuContent(){
  return(
    <>
    {/* Foto de Perfil */}
    <figure className="w-full">
      <img
        src={PROFILE_PIC_PLACEHOLDER}
        alt="Aluno"
        className="size-40 rounded-full mx-auto"
      />
    </figure>

    {/* Aqui, as informações se diferenciarão se o usuário for aluno ou professor */}

    <hr className="w-full h-0.5 bg-neutral-700 mt-2" />

    <NavigationMenu />

    </>
  )
}
