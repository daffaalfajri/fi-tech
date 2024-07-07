import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="w-full">
            <img src="/assets/image/header3.jpg" alt="" className='w-full xl:h-[480px] object-cover' />
            <div className="bg-[#2c2c2c] flex flex-col">
                <div className="pt-14">
                    <div className="px-14 flex">
                        <img src="/assets/image/gym2.jpg" alt="" className='w-80 h-80 object-cover rounded-md' />
                        <div className="px-6">
                            <h3 className='text-3xl font-semibold text-white'>Kenapa <span className='text-orange-500'>FiTech</span></h3>
                            <p className=" text-white mt-2 text-justify">Fi-Tech adalah satu pilihan body builder, Fi-Tech memberikan solusi kepada para body builder dalam memenuhi nutrisi dan protein harian agar dapat memperoleh hasil yang memuaskan. Fi-Tech hadir untuk memberikan rekomendasi kepada para new body builder dan pro body builder. Fi-Tech adalah pilihan yang tepat!</p>
                        </div>
                    </div>
                    <div className="px-14 flex mt-8">
                        <div className="px-6">
                            <h3 className='text-3xl font-semibold text-white'>Body Builder <span className='text-orange-500'>Solutions</span></h3>
                            <p className=" text-white mt-2 text-justify">Aplikasi kami adalah solusi ideal bagi para body builder yang mencari cara efisien dan efektif untuk mencapai tujuan kebugaran mereka. Dengan fitur-fitur canggih seperti pelacakan progres latihan, aplikasi kami dirancang untuk membantu body builder dari semua tingkat pengalaman untuk meningkatkan performa mereka</p>
                        </div>
                        <img src="/assets/image/gym.jpg" alt="" className='w-80 h-80 object-cover rounded-md' />
                    </div>
                    <div className="grid grid-cols-3 gap-8 px-14 mt-14 mb-14">
                        <div className="">
                            <Link>
                                <img src="/assets/imgProduk/evowhey.jpeg" alt="" className='rounded-md' />
                            </Link>
                        </div>
                        <div className="">
                            <Link>
                                <img src="/assets/imgop/goldwhey.jpeg" alt="" className='rounded-md' />
                            </Link>

                        </div>
                        <div className="">
                            <Link>
                                <img src="/assets/imgop/hydrowhey.jpeg" alt="" className='rounded-md' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

