"use client"

import Header from "@/components/Header";
import AvatarList from "@/components/AvatarList";
import CreateAvatarModal from "@/components/CreateAvatarModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Header />
      <AvatarList />
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 
      bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full 
        shadow-lg shadow-blue-600/20
        hover:scale-105
      hover:bg-blue-700 hover:shadow-blue-400/20 
        hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] 
        transition-all duration-300 ease-in-out"
      >
        Create New Avatar
      </button>

      {showModal && <CreateAvatarModal onClose={() => setShowModal(false)} />}
    </>
  );
}
