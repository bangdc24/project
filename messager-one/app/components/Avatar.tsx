'use client'

import { User } from "@prisma/client";

interface AvatarProps {
    user?: User;
}

const Avatar:React.FC<AvatarProps> = ({
    user
}) => {
    return(
        <div className="relative">
            <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
                <img src={user?.image || 'images/avatar.jpg'} alt="Avatar"  />
                <div>
                    <span className="absolute block rounded-full bg-gray-500 ring-2 ring-white top-1 right-0 h-2 w-2 md:h-3 md:w-3"/>
                </div>
            </div>
        </div>
    );
}

export default Avatar; 