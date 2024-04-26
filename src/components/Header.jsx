import { IconMoon } from "./icons/IconMoon.jsx";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="uppercase text-white text-3xl  tracking-[0.3em]
                 font-[josefin-sans weigth: 400, 700] ">Todo</h1>
        <button className="h-9 w-9 items-center">
          <IconMoon className="hover:fill-yellow-200" />
        </button>
      </div>
    </header>
  )
}