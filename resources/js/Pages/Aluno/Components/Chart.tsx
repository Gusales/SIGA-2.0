interface ChartProps {
  percentage: number,
  text: string,
  percentageText?: string,
}

export function Chart({ text, percentage, percentageText }: ChartProps){
  return(
    <div className="relative size-20">
      <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="15" fill="none" className="stroke-current text-azul-200 dark:text-azul-900" stroke-width="5"></circle>
        <circle cx="18" cy="18" r="15" fill="none" className="stroke-current text-vermelho-400" stroke-width="5" stroke-dasharray="100" stroke-dashoffset={100-(percentage)} stroke-linecap="round"></circle>
      </svg>
      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div className="text-center text-neutro-700 dark:text-neutral-50 text-xs -mt-3">
          <p>
            {text}
          </p>
          <p className="font-semibold text-sm">
            {percentageText ? percentageText : percentage}%
          </p>
        </div>
      </div>
    </div>
  )
}
