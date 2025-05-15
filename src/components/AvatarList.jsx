'use client';

import { useEffect, useState } from "react";
import useUsersInfo from "@/hooks/useUsersInfo";
import AvatarCard from "./AvatarCard";

const AvatarList = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchedUsers = useUsersInfo();

    useEffect(() => {
        if (Array.isArray(fetchedUsers) && fetchedUsers.length > 0) {
            setUsers(fetchedUsers.slice(0, 3));
            setLoading(false);
        } else {
            setUsers([]);
            setLoading(false);
        }
    }, [fetchedUsers]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64 text-cyan-200 font-medium text-lg animate-pulse">
                Loading avatars...
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8 mt-12 mb-30">
            {users.map((user) => (
                <AvatarCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default AvatarList;
