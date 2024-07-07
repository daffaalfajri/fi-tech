import React from 'react'
import { useState } from 'react';
import CardBestProduct from '../../components/card/BestProduct';
import { FireIcon, InboxIcon } from '@heroicons/react/24/solid';
import ProdukTable from '../../components/content/table';
// import axios from 'axios';

const ProdukPage = () => {
    const [dataProduk, setDataProduk] = useState([]);

    const data = [
        {
            id: 1,
            nama_produk: 'Evolene Evomass',
            gambar: '/assets/imgProduk/evomasss.jpeg',
        },
        {
            id: 2,
            nama_produk: 'Optimum Nutrition',
            gambar: '/assets/imgop/goldwhey.jpeg',
        },
        {
            id: 3,
            nama_produk: 'Rimba Mass',
            gambar: '/assets/imgprovos/rimba.jpeg',
        },
    ]

    // post data produk
    return (
        <div className="w-full h-full bg-[#2c2c2c]">
            <div className="px-14 pt-8">
                <div className="flex">
                    <FireIcon className='h-8 text-orange-500 mr-2' />
                    <h3 className='text-3xl text-white font-semibold'>Best Produk</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-8">
                    {data.map((produk => (
                        <CardBestProduct key={produk.id} gambar={produk.gambar} nama_produk={produk.nama_produk} />
                    )))}
                </div>
            </div>
            <div className="px-14">
                <div className="flex items-center mt-8">
                    <InboxIcon className='h-8 text-orange-500 mr-2' />
                    <h3 className='text-3xl text-white font-semibold'>Daftar Produk</h3>
                </div>
                <div className="w-full pb-8">
                    <ProdukTable />
                </div>
            </div>
        </div>
    )
}

export default ProdukPage;
