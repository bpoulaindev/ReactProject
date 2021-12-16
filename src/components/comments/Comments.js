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
            <form onSubmit={newComment} className="flex flex-wrap justify-center items-start">
                <div className=" flex flex-wrap sm:flex-nowrap rounded-md shadow-sm m-4 md:w-1/2">
                    <div className="flex flex-col m-2 w-1/2">
                        <label htmlFor="newPseudo" className="block text-sm font-medium text-gray-700">
                            Your pseudo
                        </label>
                        <input
                            type="newPseudo"
                            name="newPseudo"
                            id="newPseudo"
                            value={pseudo}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block 
                            rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300 mt-2 w-full"
                            placeholder="Your pseudo"
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex flex-col m-2 w-1/2">
                        <label htmlFor="newComment" className="block text-sm font-medium text-gray-700 mt-2">
                            Add your comment
                        </label>
                        <div className="mt-2">
                            <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                            value={message}
                            placeholder="New comment"
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    
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
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-4">
            {comments.map(comment => (
                <Comment {...comment} />
            ))}
        </ul>
      </>
    )
}