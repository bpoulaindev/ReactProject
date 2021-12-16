import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const TaskDetails = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState([])

    useEffect(() => {
        console.log(taskId)
        axios.get(`http://jsonplaceholder.typicode.com/todos/${taskId}`)
        .then(res => setTask(res.data))
    }, []);
    if (task.length === 0) {
        return (
        <div>
            <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
                
            </svg>
        </div>
    )}
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-auto content-center min-w-[300px] max-w-screen-lg sm:mt-20">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Task Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Task id : {taskId}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Title</dt>
                <dd className="mt-1 text-sm text-gray-900">{task.title}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">User ID</dt>
                <dd className="mt-1 text-sm text-gray-900">{task.userId}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900">
                    {task.completed && <span>Completed</span>}
                    {!task.completed && <span>In progress</span>}
                </dd>
              </div>
            </dl>
            </div>
        </div>
    )
}
