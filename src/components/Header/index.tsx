"use client"
import { showContext } from "@/context/showContest";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Header() {
  const {setSearch} = useContext(showContext)

  return (
    <header className="flex items-center p-5 bg-[#302121] gap-10 justify-between shadow-xl fixed shadow-black w-screen">
      <div className="flex items-center gap-10">
        <Image alt="Logo Netflix" src="/NetflixLogoSvg.png" width={180} height={90} />
        <nav className="text-gray-200 flex gap-3">
          <span className="cursor-pointer hover:text-gray-400 transition-all">Início</span>
          <span className="cursor-pointer hover:text-gray-400 transition-all">Séries</span>
          <span className="cursor-pointer hover:text-gray-400 transition-all">Filmes</span>
          <span className="cursor-pointer hover:text-gray-400 transition-all">Bombando</span>
          <span className="cursor-pointer hover:text-gray-400 transition-all">Minha lista</span>
          <span className="cursor-pointer hover:text-gray-400 transition-all">Navegar por idiomas</span>
        </nav>
      </div>
      <div className="grow max-w-80 mr-7">
        <input type="text" placeholder="Buscar série" className="px-2 py-1 rounded-md w-full bg-gray-300 text-lg font-semibold placeholder:text-slate-500 focus:outline focus:outline-[5px] outline-blue-700" onChange={(e)=>{ setSearch(e.target.value)}} />
      </div>
    </header>
  );
}