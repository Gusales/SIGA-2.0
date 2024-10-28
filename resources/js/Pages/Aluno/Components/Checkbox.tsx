import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<'input'> {
  text: string
}

export default function Checkbox({ text, ...props }: CheckboxProps){
  return(
    <label
      htmlFor={`check-${text}`}
      className={cn(`relative flex items-center justify-center size-full py-1 px-2 cursor-pointer focus-within:outline-2 rounded-md ${props.checked && "bg-vermelho-500 text-white font-bold"}`, props.className)}
    >
      <input
        {...props}
        type="checkbox"
        id={`check-${text}`}
        className="absolute inset-0 invisible"
      />
      <p className="pointer-events-none">{text}</p>
    </label>
  )
}
