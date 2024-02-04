
export default function Navbar({tasks,count}){

    return(
        <nav className="h-20 bg-gray-700 flex flex-row justify-evenly items-center">
            <h1 className="text-white text-2xl">Total task : {tasks?tasks.length:0}</h1>
            <h1 className="text-white text-2xl">Todo App</h1>
            <h1 className="text-white text-2xl">Completed Task : {count}</h1>

        </nav>
    )
}