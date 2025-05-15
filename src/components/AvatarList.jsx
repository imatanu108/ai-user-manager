'use client';

import useUsersInfo from "@/hooks/useUsersInfo";
import AvatarCard from "./AvatarCard";

const AvatarList = () => {
    const users = useUsersInfo().slice(0, 3)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8 mt-12 mb-30">
            {users.map((user) => (
                <AvatarCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default AvatarList;
