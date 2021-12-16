export const Comment = (comment) => {
    return (
        <li key={comment.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">{comment.pseudo}</h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">
                        {comment.id}
                    </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">{comment.message}</p>
                </div>
                </div>
            </li>
    )
}
