import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { EyeIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
    }, [])
    if (users.length === 0) {
      return (
      <div>
          <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
              
          </svg>
      </div>
    )}
    return(
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-4">
        {users.map(user => (
          <li key={uuidv4()} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">{user.name}</h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">
                    {user.username}
                  </span>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">{user.company.name}</p>
              </div>
              <img 
                className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" 
                src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="" />
            </div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <Link
                    to={`/user/${user.id}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-b-lg bg-indigo-500 hover:bg-indigo-800"
                  >
                    <EyeIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    <span className="ml-3">View profile</span>
                  </Link>
                </div>
              </div>
          </li>
        ))}
      </ul>
    )
}