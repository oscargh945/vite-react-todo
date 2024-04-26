import { CrossIcon } from "./components/icons/CrossIcon.jsx";
import { MoonIcon } from "./components/icons/MoonIcon.jsx";

const App = () => {
    return <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] mx-auto bg-no-repeat bg-gray-200 min-h-screen">
        <header className="container mx-auto px-4 pt-8">
            <div className="flex items-center justify-between">
                <h1 className="uppercase text-white text-3xl  tracking-[0.3em]
                 font-[josefin-sans weigth: 400, 700] " >Todo</h1>
                <button className="h-9 w-9 items-center">
                    <MoonIcon className="hover:fill-yellow-200" />
                </button>
            </div>
            <form className="flex rounded-md bg-white overflow-hidden mt-4 py-2 gap-4 items-center px-4">
                <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
                <input
                  type="text"
                  placeholder="Create a new todo..."
                  className="w-full text-gray-800 outline-none"
                />
            </form>
        </header>

        <main className="container mx-auto mt-6 px-4">
            <div className="mx-auto rounded-md bg-white [&>article]:p-4">
                <article className="flex flex-none gap-4 px-4 border-b-gray-200 border-b">
                    <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
                    <p className="grow text-gray-600">complete online JavaScript</p>
                    <button>
                        <CrossIcon className="hover:fill-red-600"/>
                    </button>
                </article>
                <article className="flex flex-none gap-4 px-4 border-b-gray-200 border-b">
                    <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
                    <p className="grow text-gray-600">complete online JavaScript</p>
                    <button>
                        <CrossIcon className="hover:fill-red-600"/>
                    </button>
                </article>
                <article className="flex flex-none gap-4 px-4 border-b-gray-200 border-b">
                    <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
                    <p className="grow text-gray-600">complete online JavaScript</p>
                    <button>
                        <CrossIcon className="hover:fill-red-600"/>
                    </button>
                </article>
                <article className="flex flex-none gap-4 px-4 border-b-gray-200 border-b">
                    <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
                    <p className="grow text-gray-600">complete online JavaScript</p>
                    <button>
                        <CrossIcon className="hover:fill-red-600"/>
                    </button>
                </article>
                <section className="flex justify-between py-4 px-4 text-gray-400">
                    <span>5 items left</span>
                    <button className="hover:text-red-600">clear completed</button>
                </section>
            </div>
        </main>
            <section
              className="container mx-auto mt-8 px-4">
                <div className="flex justify-center rounded-md bg-white overflow-hidden p-2 gap-4 text-gray-500">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

        <p className="text-center py-12 text-gray-500">Drag and drop to reader list</p>
    </div>
}

export default App
