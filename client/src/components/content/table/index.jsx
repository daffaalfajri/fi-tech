import React, { useState, useEffect } from 'react';

export const ProdukTable = () => {
    const [item, setItem] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:3080/api/v2/data-barang')
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div className="bg-gray-500/50 relative overflow-x-auto shadow-sm sm:rounded-lg mt-8 p-4">
                <div className="flex items-center justify-between flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-transparent dark:bg-gray-900">
                    <div>

                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            className="block p-2 ps-10 text-sm text-gray-200 border border-gray-500 rounded-lg w-80 bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Cari Produk"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-400">
                    <thead className="text-xs text-gray-200 uppercase bg-gray-500/50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Berat Bersih
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gambar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {item
                            .filter(item => {
                                if (searchQuery && item.Nama) {
                                    return item.Nama.toLowerCase().includes(searchQuery.toLowerCase());
                                }
                                return true;
                            })
                            .map(item => (
                                <tr key={item.idBarang} className="bg-gray-700 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <div className="text-sm font-medium text-gray-200 dark:text-white">{item.idBarang}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-200 dark:text-white">{item.Nama}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-300 dark:text-gray-400">{item.Merek}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-green-400 dark:text-green-400">{item.BeratBersih}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-green-400 dark:text-green-400">Rp. {item.Harga}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={item.gambar} alt="" className="h-14 w-14 object-cover" />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProdukTable;
