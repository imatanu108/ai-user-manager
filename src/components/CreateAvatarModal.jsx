'use client';

import { useState } from 'react';

const CreateAvatarModal = ({ onClose }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("")


const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!email.trim()) {
        newErrors.email = 'Email is required.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Enter a valid email address.';
        }
    }
    if (!avatar) {
        newErrors.avatar = 'Avatar image is required.';
    } else if (!avatar.type.startsWith('image/')) {
        newErrors.avatar = 'Avatar must be an image file.';
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    setErrors({});

    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('email', email);
    data.append('avatar', avatar);

    setSuccess("User created successfully!")
    setTimeout(() => {
        onClose();
        setSuccess("")
    }, 2000)
};


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 px-4">
            <div className="bg-[#123b4c] text-white w-full max-w-md rounded-2xl p-6 relative shadow-xl border-2 border-cyan-300/30">

                <h2 className="text-2xl text-cyan-200 font-semibold mb-6 text-center">Create New Avatar</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>


                    <div className="relative flex items-center justify-center">
                        <img
                            src={avatarPreview || "https://images.pexels.com/lib/avatars/grey.png?w=100&h=100&fit=crop&dpr=2"}
                            className="h-24 w-24 rounded-full object-cover border-2"
                        />
                        <button
                            type='button'
                            className="absolute md:left-37.5 md:right-37.5 mx-auto inset-0 flex items-center justify-center bg-[#103b4b12] rounded-full "
                            onClick={() => document.getElementById("avatarUpload")?.click()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera-icon lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                        </button>
                        <input
                            type="file"
                            id="avatarUpload"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                console.log(1)
                                console.log(file)
                                if (file) {
                                    setAvatar(file);
                                    setAvatarPreview(URL.createObjectURL(file));
                                }
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your firstname"
                            className="w-full px-4 py-2 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your lastname"
                            className="w-full px-4 py-2 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                            className="w-full px-4 py-2 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {Object.values(errors).length > 0 && (
                        <div className="bg-red-100 text-red-800 text-sm rounded-md px-4 py-2 mb-2">
                            <ul className="list-disc pl-5 space-y-1">
                                {Object.entries(errors).map(([key, msg]) => (
                                    <li key={key}>{msg}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-100 text-green-800 text-sm rounded-md px-4 py-2 mb-2">
                            {success}
                        </div>
                    )}


                    <div className='flex justify-center items-center gap-6'>
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl shadow-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl shadow-lg transition"
                        >
                            Create
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateAvatarModal;
