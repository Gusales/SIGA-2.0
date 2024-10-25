import { ComponentProps } from "react";

interface CicloCheckboxProps extends ComponentProps<'input'> {
  text: string
}

export default function CicloCheckbox({ text, ...props }: CicloCheckboxProps){
  return(
    <label
      htmlFor={`check-${text}`}
      className={`relative flex items-center justify-center size-full py-1 px-2 cursor-pointer focus-within:outline-2 rounded-md ${props.checked && "bg-vermelho-500 text-white"}`}
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
