'use client';

const Header = () => {
    return (
        <header className="my-8 w-full flex justify-center items-center">
            <div className="flex flex-col items-center text-center p-4 rounded-xl">
                <h1 className="flex items-center justify-center">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold animate-typewriter 
                    bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(3,70,95,0.65)]">
                        Welcome to Your Dashboard!
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-blue-700 animate-cursor">│</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;
