import axios from "axios"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { EyeIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline'

import { Link } from 'react-router-dom';

export const Tasks = () => {
    const [todos, setTodos] = useState([])
    const [taskInput, setTaskInput] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setTodos(res.data))
    }, [])

    useEffect(() => {
        document.title=`Number of tasks : ${todos.length}`;
    },[todos])

    function addTask(e) {
        e.preventDefault();
        const newTask = {id: uuidv4(), title: taskInput, completed:false}
        setTodos([newTask, ...todos])
        setTaskInput('')
    }

    function deleteTask(taskId) {
        const newTodos = todos.filter(task => task.id !== taskId)
        setTodos(newTodos)
    }

    function toggleCompleteTask(taskId) {
        const currTasks = [...todos];
        const index = currTasks.findIndex(task => task.id === taskId)
        currTasks[index].completed = !currTasks[index].completed
        setTodos(currTasks)
    }
    if (todos.length === 0) {
        return (
        <div>
            <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
                
            </svg>
        </div>
    )}
    return (
        <>
            <div className="flex flex-wrap justify-center items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900 m-4">
                    You have {todos.length} tasks
                </h3>
                <form onSubmit={addTask} >
                    <div className=" flex rounded-md shadow-sm m-4 w-full">
                        <input
                            type="newTask"
                            name="newTask"
                            id="newTask"
                            value={taskInput}
                            className="focus:ring-indigo-500 w-full focus:border-indigo-500 block 
                            w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
                            placeholder="New task"
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                        <button
                        type="submit"
                        className="-ml-px relative inline-flex items-center space-x-2 px-4 
                        py-2 border border-transparent text-sm font-medium rounded-r-md 
                        text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                        focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <span className="flex flex-nowrap">Add</span>
                        </button>
                    </div>
                </form>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-4">
                {todos.map(task => (
                    <li key={task.id} className={`col-span-1 bg-white rounded-lg shadow 
                    divide-y divide-gray-200 ${task.completed ? "task task-completed" : "task"}`}>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 
                                    border-gray-300 rounded cursor-pointer"
                                    checked={task.completed}
                                    onChange={() => toggleCompleteTask(task.id)}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                    {task.title}
                                </label>
                            </div>
                        </div>
                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                            <Link
                                to={`/task/${task.id}`}
                                className="relative inline-flex items-center px-2 py-2 
                                rounded-l-md border border-transparent bg-indigo-600 
                                text-sm font-medium text-white hover:bg-indigo-700 
                                focus:z-10 focus:outline-none focus:ring-1 
                                focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <span className="sr-only">View</span>
                                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                            </Link>
                            <button
                                type="button"
                                className="-ml-px relative inline-flex items-center 
                                px-2 py-2 rounded-r-md border border-transparent 
                                bg-red-600 text-sm font-medium text-white 
                                hover:bg-red-700 focus:z-10 focus:outline-none 
                                focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                onClick={() => deleteTask(task.id)}
                            >
                                <span className="sr-only">Delete</span>
                                <TrashIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </span>
                    </div>
                  </li>
                ))}
            </ul>
        </>
    )
}