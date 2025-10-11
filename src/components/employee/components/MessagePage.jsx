
import { useState, useRef, useEffect } from 'react';
import { Send, MoreVertical } from 'lucide-react';
import { BiSend } from "react-icons/bi";

export default function MessagePage() {
    // Apnar onnanno state and data...
    const [selectedChat, setSelectedChat] = useState(0);
    const [messages, setMessages] = useState([
        { id: 1, text: 'Yo mandem', sent: false, time: '6:21 PM', sender: 'Ope' },
        { id: 2, text: 'Cho dey house?', sent: false, time: '6:21 PM', sender: 'Ope' },
        { id: 3, text: 'Kwasia 😂😂', sent: true, time: '6:22 PM', sender: 'You' },
        { id: 4, text: 'You dey hung dier you kai say house dey', sent: true, time: '6:23 PM', sender: 'You' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const chatList = [
        { id: 1, name: 'TechPrint Hub', time: '17 min', preview: 'Goo, its been good news all day.', avatar: 'bg-gradient-to-br from-slate-400 to-slate-600', initial: 'T' },
        { id: 2, name: '3D Maker Store', time: '1 hr', preview: 'Are you coming to class tomorrow?', avatar: 'bg-gradient-to-br from-green-600 to-green-800', initial: '3' },
        { id: 3, name: 'Printify Zone', time: '2 hrs', preview: 'I miss you dude, when are you coming?', avatar: 'bg-gradient-to-br from-orange-400 to-orange-600', initial: 'P' },
        { id: 4, name: 'GadgetForge', time: '3 hrs', preview: 'Baba what sup na, you still de Lagos?', avatar: 'bg-gradient-to-br from-yellow-300 to-yellow-500', initial: 'G' },
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // message array-te notun message add kora
        setMessages([...messages, { id: messages.length + 1, text: inputValue, sent: true, time: timeStr, sender: 'You' }]);
        // Input field khali kora
        setInputValue('');
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row h-screen bg-gray-50 p-0 md:p-8 rounded-none md:rounded-2xl overflow-hidden">
            
            {/* Left Panel - Chat List */}
            <div className="w-full md:w-80 flex flex-col bg-white border-r border-gray-200 shadow-sm flex-shrink-0">
                
                {/* Header */}
                <div className="p-4 py-[18px] border-b border-gray-200 bg-[#EEEEEE] flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Recent Messages</h2>
                    <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full transition">
                        <MoreVertical size={18} />
                    </button>
                </div>
                
                {/* Chat List Body */}
                <div className="flex-1 overflow-y-auto scrollbar-hide bg-[#EEEEEE] max-h-48 md:max-h-full">
                    {chatList.map((chat, index) => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChat(index)}
                            className={`px-4 py-3 cursor-pointer transition-all duration-200 ${selectedChat === index ? 'bg-white' : 'hover:bg-gray-50'}`}
                        >
                            <div className="flex gap-3">
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 ${chat.avatar} shadow-md flex items-center justify-center text-white font-bold text-sm border-2 border-white`}>
                                    {chat.initial}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-2">
                                        <h3 className="font-semibold text-sm text-gray-900">{chat.name}</h3>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">{chat.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 line-clamp-1 mt-1">{chat.preview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel - Message View */}
            <div className="flex-1 flex flex-col bg-[#F8F8F8] min-h-0">
                
                {/* Header */}
                <div className="px-4 md:px-6 py-3 border-b border-gray-200 bg-[#EEEEEE] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-blue-300 shadow-md flex items-center justify-center text-white font-bold text-xs md:text-base">O</div>
                        <div>
                            <h2 className="font-semibold text-gray-900 text-sm md:text-base">Ope</h2>
                            <p className="text-xs text-green-600 font-medium">Active</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 md:p-2 rounded-full hover:bg-gray-100 transition">
                        <MoreVertical size={20} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-3 md:gap-4 bg-[#F8F8F8]">
                    <div className="text-center py-2">
                        <p className="text-gray-400 text-xs md:text-sm font-medium">Thursday, Jan 4 • 6:21 PM</p>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} gap-2 md:gap-3`}>
                            {!msg.sent && (
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 shadow-md flex items-center justify-center text-white text-xs font-bold">O</div>
                            )}
                            <div className={`max-w-[75%] md:max-w-sm px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl shadow-sm ${msg.sent ? 'bg-[#E4E7EC] rounded-br-none' : 'bg-[#E4E7EC] rounded-bl-none'}`}>
                                {/* ✅ Hardcoded string-ti remove kora holo. Sudhu {msg.text} thakbe */}
                                <p className="text-xs md:text-sm break-words">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 bg-[#F8F8F8]">
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Input container */}
                        <div className="flex-1 h-10 md:h-14 flex gap-2 md:gap-3 items-center bg-[#FFFFFF] rounded-full px-3 md:px-4 py-1 md:py-2 border border-gray-200 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-200 transition">
                            <input
                                type="text"
                                placeholder="Text message..."
                                value={inputValue} // ✅inputValue state-er sathe bind kora
                                onChange={(e) => setInputValue(e.target.value)} // ✅ inputValue change kora
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()} // ✅ Enter key press-e message pathano
                                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-900 placeholder-[#98A2B3]"
                            />
                        </div>

                        {/* Send button */}
                        <button
                            onClick={handleSend} // ✅ Click-e message pathano
                            className="bg-white hover:bg-[#F0F2F5] h-10 w-10 md:h-12 md:w-12 flex justify-center items-center rounded-full text-xl md:text-2xl text-[#98A2B3] flex-shrink-0"
                        >
                            <BiSend />
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}