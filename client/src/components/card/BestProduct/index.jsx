import React from 'react'

const CardBestProduct = ({ gambar, nama_produk }) => {
    return (
        <div className="w-72 h-fit  bg-gray-500/50 p-4 rounded-md">
            <img src={gambar} className='w-full rounded-lg' alt="" />
            <h4 className='text-white text-2xl font-semibold text-center mt-2 '>
                {nama_produk}
            </h4>
        </div>
    )
}

export default CardBestProduct