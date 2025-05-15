'use client';

const AvatarCard = ({ user }) => {
    return (
        <div className="relative group transition-all duration-300 hover:scale-105 m-2 md:mx-4">
            <div className="absolute inset-0 bg-blue-700 rounded-xl blur-md group-hover:blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/20 border-2 border-gray-400 overflow-hidden transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={user.avatar}
                        alt={`${user.first_name}'s avatar`}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                    />

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-cyan-100">
                            {user.first_name} {user.last_name}
                        </h3>
                    </div>
                    <button className="flex items-center gap-1 justify-center p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200 group/button"
                    >
                        <svg className="feather feather-edit" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>

                        <span className="text-base text-center font-medium">Edit</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AvatarCard;
