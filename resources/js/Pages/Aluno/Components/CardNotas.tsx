interface CardNotasProps {
  materia:  {
    sigla: string;
    nome: string;
    faltas: number;
    freq: string;
    nota: number;
    status: string;
  }
}

export default function CardNotas({ materia }: CardNotasProps){
  return(
    <article className="w-full min-h-20 bg-white grid grid-cols-[80px,2fr,1fr] rounded-md text-sm shadow">
      <div className="min-h-full flex items-center justify-center px-2">
        <p>{materia.sigla.toUpperCase()}</p>
      </div>
      <div className="flex-1 flex flex-col justify-center px-2 border-x border-x-neutro-200">
        <h4 className="font-semibold">{materia.nome}</h4>
        <p className="font-medium">Faltas: <b>{materia.faltas}</b> - Frequência: <b>{materia.freq}</b></p>
      </div>
      <div className="pl-4 pr-2 flex flex-col justify-center">
        <p>Nota: <span className="font-bold">{materia.nota}</span></p>
        <p className={`text-xs ${materia.status === "Aprovado" || materia.status === 'Dispensado' ? "text-green-700" : materia.status === "Cursando" ? "text-crayola" : "text-vermelho-700 text-[8px]"}`}>{materia.status}</p>
      </div>
    </article>
  )
}
