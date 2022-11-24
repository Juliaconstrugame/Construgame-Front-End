import React from "react";
import Avatar from "./Avatar"
import Menu from './Menu';
import Logo from "./Logo";
import { useRouter } from "next/router";

export default function Header() 
{ 
    const router = useRouter()

    return ( 
        <header className="container py-4">     
            <div className="layout-grid">
                <div className="col-span-1 w-full flex justify-start items-center">
                    <Menu />
                </div>
                <div className="col-span-2 w-full flex justify-center items-center cursor-pointer" onClick={() => router.push('/game/matches') }>
                    <Logo />
                </div>
                <div className="col-span-1 w-full flex justify-end items-center cursor-pointer" onClick={() => router.push('/game/ranking')}>
                    <Avatar name="Matheus Neves" />
                </div>
            </div>
        </header>
    )
}