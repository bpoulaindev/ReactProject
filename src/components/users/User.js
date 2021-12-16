import React, { useState, useEffect } from "react"
import axios from 'axios'

import { useParams } from "react-router-dom";

export const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => setUser(res.data))
    }, [userId])
    if (user.length === 0) {
        return (
        <div>
            <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
                
            </svg>
        </div>
    )}
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-auto content-center min-w-[300px] max-w-screen-lg sm:mt-20">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Company name</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.company.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.phone}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <div className="flex flex-col max-w-xs">
                    <div className="flex align-center mt-1 justify-between">
                        <div className="text-sm font-medium text-gray-500">Street</div>
                        <div className="text-sm text-gray-900 ml-2">{user.address.street}</div>
                    </div>
                    <div className="flex align-center mt-2 justify-between border-t border-gray-200">
                        <div className="text-sm font-medium text-gray-500">Suite</div>
                        <div className="text-sm text-gray-900 ml-2">{user.address.suite}</div>
                    </div>
                    <div className="flex align-center mt-2 justify-between border-t border-gray-200 ">
                        <div className="text-sm font-medium text-gray-500">City</div>
                        <div className="text-sm text-gray-900 ml-2">{user.address.city}</div>
                    </div>
                    <div className="flex align-center mt-2 justify-between border-t border-gray-200">
                        <div className="text-sm font-medium text-gray-500">Zipcode</div>
                        <div className="text-sm text-gray-900 ml-2">{user.address.zipcode}</div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.website}</dd>
              </div>
            </dl>
          </div>
        </div>
      )
}