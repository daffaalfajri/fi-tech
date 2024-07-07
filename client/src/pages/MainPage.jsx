import React from 'react'
import { useState } from 'react';
import { SidebarWithLogo } from '../layouts/Sidebar';
import HomePage from './home';
import ProdukPage from './produk';
import ChatPage from './chat';
import PerbandinganPage from './perbandingan';

export const MainPage = () => {
    const [activeContent, setActiveContent] = useState("home");

    const handleTabChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="w-full h-full">
            <div className="flex bg-[#2c2c2c]">
                <div className="w-fit max-h-full">
                    <SidebarWithLogo handleTabChange={handleTabChange} />
                </div>
                <div className="h-full w-full  " >
                    {activeContent === "home" && <HomePage />}
                    {activeContent === "produk" && <ProdukPage />}
                    {activeContent === "chat" && <ChatPage />}
                    {activeContent === "perbandingan" && <PerbandinganPage />}
                </div>
            </div>
        </div>

    )
}

export default MainPage;