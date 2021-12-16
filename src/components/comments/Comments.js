import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Comment } from './Comment';

export const Comments = () => {
    const [comments, setComments] = useState([
        {id: "randomId457", pseudo: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"},  
        {id: "randomId458", pseudo: "Jean-Claude", message: "Oublies que t'as aucune chance, vas-y fonce!"} 
    ]);
    const [pseudo, setPseudo] = useState('');
    const [message, setMessage] = useState('');
    const newComment = (e) => {
        e.preventDefault();
        setComments([...comments, {id: uuidv4(), pseudo, message}])
        setPseudo('');
        setMessage('')
    }
    return(
        <>
            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form onSubmit={newComment} action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                        Your pseudo
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm flex">
                                        <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                                        Pseudo
                                        </span>
                                        <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        value={pseudo}
                                        onChange={(e) => setPseudo(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="flex items-start space-x-4 col-span-3 sm:col-span-2">
                                    <div className="min-w-0 flex-1 relative">
                                        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                                            <label htmlFor="comment" className="sr-only">
                                                Add your comment
                                            </label>
                                            <textarea
                                                rows={3}
                                                name="comment"
                                                id="comment"
                                                className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                                                placeholder="Add your comment..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                            <div className="py-2" aria-hidden="true">
                                                <div className="py-px">
                                                    <div className="h-9" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between flex-row-reverse">
                                            <div className="flex-shrink-0">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-4">
                {comments.map(comment => (
                    <Comment {...comment} />
                ))}
            </ul>
        </>
    )
}