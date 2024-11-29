import { Link } from "@inertiajs/react";
import { ComponentProps, ComponentType } from "react";

interface CardAtalhoProps extends ComponentProps<typeof Link> {
  Icon: ComponentType,
  title: string
  description: string
}

export function CardAtalho({Icon, title, description, ...props}: CardAtalhoProps){
  return(
    <Link
      className="flex flex-col p-2 bg-white dark:bg-azul-800 shadow rounded"
      {...props}
    >
      <div className="flex-1 flex items-end justify-end">
        <Icon />
      </div>
      <h4 className="text-sm font-semibold font-title dark:text-neutro-50">{title}</h4>
      <p className="text-[10px] dark:text-neutro-100">{description}</p>

    </Link>
  )
}
