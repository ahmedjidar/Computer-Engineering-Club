import React, { useState } from "react";
import members from '../../../../Constants/members'

const MembersList = () => {
    const [communityMembers, setCommunityMembers] = useState(members);

    return(
        <>
            <p className="mb-4 mt-2 ml-2 text-sm text-gray-300">@Colleagues</p>
            <ul role="list" className="divide-y divide-gray-100 h-screen">
            {communityMembers.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-3 hover:bg-green-50 cursor-pointer mt-1 p-2 rounded">
                <div className="flex min-w-0 gap-x-1">
                <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-xs font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-xs leading-6 text-gray-900">{person.role}</p>
                {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                    </p>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                )}
                </div>
            </li>
            ))}
            </ul>
        </>

    )
}

export default MembersList;