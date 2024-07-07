import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TambahProdukForm = () => {
    const [nama, setNama] = useState('');
    const [merek, setMerek] = useState('');
    const [beratBersih, setBeratBersih] = useState('');
    const [harga, setHarga] = useState('');
    const [gambar, setGambar] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            nama,
            merek,
            beratBersih,
            harga: parseInt(harga),
            gambar,
        };

        try {
            const response = await fetch('http://localhost:3080/api/v2/data-barang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                const data = await response.json();

                setNama('');
                setMerek('');
                setBeratBersih('');
                setHarga('');
                setGambar('');

                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Produk berhasil ditambahkan.',
                });
            } else {
                throw new Error('Terjadi kesalahan saat menambahkan produk.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Gagal',
                text: error.message,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md bg-gray-500/50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-semibold mb-4">Tambah Produk</h2>
            <div className="mb-4">
                <label htmlFor="nama" className="block text-white">Nama</label>
                <input
                    type="text"
                    id="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="merek" className="block text-white">Merek</label>
                <input
                    type="text"
                    id="merek"
                    value={merek}
                    onChange={(e) => setMerek(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="beratBersih" className="block text-white">Berat Bersih</label>
                <input
                    type="text"
                    id="beratBersih"
                    value={beratBersih}
                    onChange={(e) => setBeratBersih(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="harga" className="block text-white">Harga</label>
                <input
                    type="number"
                    id="harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="gambar" className="block text-white">Gambar URL</label>
                <input
                    type="text"
                    id="gambar"
                    value={gambar}
                    onChange={(e) => setGambar(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
                Tambah Produk
            </button>
        </form>
    );
};

export default TambahProdukForm;
