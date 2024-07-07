import React from 'react'
import { SidebarWithLogo } from '../../layouts/Sidebar/sidebar';
import TambahProdukPage from '../TambahProduk';
import ProfilePage from '../profile';

const DashboardPage = () => {
    const [activeContent, setActiveContent] = React.useState("beranda");
    const handleTabChange = (content) => {
        setActiveContent(content);
    };

    return (
        <>
            <div className="w-full h-full">
                <div className="flex bg-[#2c2c2c]">
                    <div className="w-fit max-h-full">
                        <SidebarWithLogo handleTabChange={handleTabChange} />
                    </div>
                    <div className="h-full w-full  " >
                        {activeContent === "produk" && <TambahProdukPage />}
                        {activeContent === "profile" && <ProfilePage />}
                    </div>
                </div>
            </div>Ï
        </>
    )
}

export default DashboardPage;