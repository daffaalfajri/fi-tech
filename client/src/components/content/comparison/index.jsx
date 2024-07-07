import React, { useState, useEffect } from 'react';

const ComparisonComponent = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3080/api/v2/data-barang')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSelectChange = (event) => {
        const selectedId = parseInt(event.target.value);
        if (selectedId === -1) return;
        const selectedProduct = products.find(product => product.idBarang === selectedId);
        setSelectedProducts(prevSelectedProducts => {
            if (prevSelectedProducts.some(product => product.idBarang === selectedId)) {
                return prevSelectedProducts;
            }
            return [...prevSelectedProducts, selectedProduct];
        });
    };

    const handleRemoveProduct = (idBarang) => {
        setSelectedProducts(prevSelectedProducts =>
            prevSelectedProducts.filter(product => product.idBarang !== idBarang)
        );
    };

    return (
        <div className="flex flex-col w-full h-full bg-[#2c2c2c] pb-8">
            <h3 className="text-3xl text-white font-semibold pt-8">Perbandingan</h3>
            <p className="text-sm font-light text-gray-400 mt-2">Anda dapat membandingkan produk-produk yang tersedia</p>
            <div className="w-full mt-8">
                <select
                    onChange={handleSelectChange}
                    className="p-2 rounded bg-gray-700 text-white"
                >
                    <option value="-1">Pilih produk untuk dibandingkan</option>
                    {products.map(product => (
                        <option key={product.idBarang} value={product.idBarang}>
                            {product.Nama}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full grid grid-cols-3 gap-4 mt-8">
                {selectedProducts.map(product => (
                    <div key={product.idBarang} className="max-w-sm bg-white rounded-lg shadow-md">
                        <img className="h-48 w-full object-cover" src={product.gambar} alt={product.Nama} />
                        <div className="p-4">
                            <h5 className="text-xl font-semibold">{product.Nama}</h5>
                            <p className="text-gray-700">Merek: {product.Merek}</p>
                            <p className="text-gray-700">Berat Bersih: {product.BeratBersih}</p>
                            <p className="text-gray-700">Harga: Rp. {product.Harga}</p>
                            <button onClick={() => handleRemoveProduct(product.idBarang)} className="mt-4 bg-red-500 text-white p-2 rounded">Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonComponent;
