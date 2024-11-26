import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

import { LuArrowUpRight } from 'react-icons/lu';


interface DocumentCollapsibleProps {
  title: string
  description: string
  index: number
  downloadLink?: string
  status?: 'Pending' | 'In Process' | 'Approved' | 'Rejected'
}

export function DocumentCollapsible({ title, description, index, downloadLink, status }: DocumentCollapsibleProps){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <article className="flex flex-col w-full rounded-sm shadow-sm">
      <Accordion type="single" collapsible>
        <AccordionItem value={`documento-${index}`}>
          <AccordionTrigger className="bg-white p-2 rounded rounded-tr-none text-xs shadow">
            { title }
          </AccordionTrigger>
          <AccordionContent className="bg-white/90 p-2 rounded-b flex flex-col">
            { description }

              {
                status && (
                  <div className="text-sm flex items-center gap-1 mt-2">
                    <p>Status: </p>
                     {
                      status === 'Pending' ? (
                        <p className="text-yellow-400">Pendente</p>
                      ) :
                      status === 'Approved' ? (
                        <p className="text-green-400 font-bold">Aprovado!</p>
                      ) :
                      status === 'Rejected' ? (
                        <p className="text-vermelho-600 font-bold">Pedido negado</p>
                      ) :
                      (
                        <p className="text-yellow-400">Pedido em Processo</p>
                      )
                     }
                  </div>
                )
              }

            { (downloadLink && status === 'Approved') && (
              <a
                href={downloadLink}
                download
                className="bg-vermelho-600 hover:bg-vermelho-300 transition-colors cursor-pointer font-bold text-white rounded p-2 w-fit mt-2 flex items-center gap-2"
                >
                  <LuArrowUpRight/>
                  Baixar documento
              </a>
            ) }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  )
}
