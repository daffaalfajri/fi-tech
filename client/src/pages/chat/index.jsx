import React from 'react'
import Chat from '../../components/content/chatbot';

const ChatPage = () => {
    return (
        <div className='w-full h-[100vh] px-14 bg-[#2c2c2c]'>
            <h3 className='text-3xl text-white font-semibold pt-8'>Tanya Kami</h3>
            <p className='text-sm font-light text-gray-400 mt-2'>Anda dapat tanya kami mengenai kebutuhan protein anda!</p>
            <div className="mt-8">
                <Chat />
            </div>
        </div>
    )
}

export default ChatPage;