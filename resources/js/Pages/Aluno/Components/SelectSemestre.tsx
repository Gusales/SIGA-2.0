import Checkbox from "@/Components/Checkbox"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/Components/ui/navigation-menu"

interface SelectSemestreProps {
  semestres: number[]
}

export function SelectSemestre({ semestres }: SelectSemestreProps){
  return(
    <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#ffffff] dark:bg-azul-800 shadow text-xs mt-1">
                Todos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] grid-cols-2 gap-1 p-2">
                  {
                    semestres.map(semestre => (
                      <li className="flex items-center gap-2">
                        <Checkbox id={`semestre${semestre}`} />
                        <label htmlFor={`semestre${semestre}`}>{semestre}º Semestre</label>
                      </li>
                    ))
                  }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
    </NavigationMenu>
  )
}
