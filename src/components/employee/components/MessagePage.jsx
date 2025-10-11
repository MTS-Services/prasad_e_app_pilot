
import { useState, useRef, useEffect } from 'react';
import { Send, MoreVertical } from 'lucide-react';
import { BiSend } from "react-icons/bi";

// Static data structure: Each chat now holds its own messages
const initialChatData = [
    { 
        id: 1, 
        name: 'TechPrint Hub', 
        time: '17 min', 
        preview: 'Goo, its been good news all day.', 
        avatar: 'bg-gradient-to-br from-slate-400 to-slate-600', 
        initial: 'T',
        messages: [
            { id: 1, text: 'Hi team, the new printer is ready.', sent: false, time: '6:21 PM', sender: 'T. Admin' },
            { id: 2, text: 'Goo, its been good news all day.', sent: false, time: '6:21 PM', sender: 'T. Admin' },
            { id: 3, text: 'Great! I will update the inventory.', sent: true, time: '6:22 PM', sender: 'You' },
        ],
        senderInitial: 'T'
    },
    { 
        id: 2, 
        name: '3D Maker Store', 
        time: '1 hr', 
        preview: 'Are you coming to class tomorrow?', 
        avatar: 'bg-gradient-to-br from-green-600 to-green-800', 
        initial: '3',
        messages: [
            { id: 1, text: 'Are you coming to class tomorrow?', sent: false, time: '5:00 PM', sender: 'Alex' },
            { id: 2, text: 'Yes, around 10 AM. See you there.', sent: true, time: '5:05 PM', sender: 'You' }
        ],
        senderInitial: 'A' 
    },
    { 
        id: 3, 
        name: 'Printify Zone', 
        time: '2 hrs', 
        preview: 'I miss you dude, when are you coming?', 
        avatar: 'bg-gradient-to-br from-orange-400 to-orange-600', 
        initial: 'P',
        messages: [
            { id: 1, text: 'I miss you dude, when are you coming?', sent: false, time: '4:00 PM', sender: 'PZ Admin' },
            { id: 2, text: 'Next week, for sure!', sent: true, time: '4:15 PM', sender: 'You' }
        ],
        senderInitial: 'P'
    },
    { 
        id: 4, 
        name: 'GadgetForge', 
        time: '3 hrs', 
        preview: 'Baba what sup na, you still de Lagos?', 
        avatar: 'bg-gradient-to-br from-yellow-300 to-yellow-500', 
        initial: 'G',
        messages: [
            { id: 1, text: 'Baba what sup na, you still de Lagos?', sent: false, time: '3:00 PM', sender: 'GF Buddy' },
            { id: 2, text: 'Just landed yesterday!', sent: true, time: '3:10 PM', sender: 'You' }
        ],
        senderInitial: 'B' 
    },
];

// Default chat (for the first load)
const defaultChat = {
    id: 99, 
    name: 'Ope', 
    time: '6:23 PM',
    preview: 'You dey hung dier you kai say house dey',
    avatar: 'bg-gradient-to-br from-blue-400 to-blue-600', 
    initial: 'O',
    messages: [
        { id: 1, text: 'Yo mandem', sent: false, time: '6:21 PM', sender: 'Ope' },
        { id: 2, text: 'Cho dey house?', sent: false, time: '6:21 PM', sender: 'Ope' },
        { id: 3, text: 'Kwasia 😂😂', sent: true, time: '6:22 PM', sender: 'You' },
        { id: 4, text: 'You dey hung dier you kai say house dey', sent: true, time: '6:23 PM', sender: 'You' }
    ],
    senderInitial: 'O'
};


export default function MessagePage() {
    // Shob chat data ke unified 'chats' state-e rakha hoyeche
    const [chats, setChats] = useState([defaultChat, ...initialChatData]);
    
    // Kon chat selected, sheta index diye track kora
    const [selectedChatIndex, setSelectedChatIndex] = useState(0); 
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    // Dynamic vabe selected chat-er data extract kora
    const currentChat = chats[selectedChatIndex];
    const currentMessages = currentChat.messages;

    // --- EFFECT FOR SCROLLING ---
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [currentMessages]);


    // --- FUNCTION TO HANDLE SENDING MESSAGE ---
    const handleSend = () => {
        if (!inputValue.trim()) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const newMessage = { 
            id: currentMessages.length + 1, 
            text: inputValue, 
            sent: true, 
            time: timeStr, 
            sender: 'You' 
        };

        // setChats update kore selected chat-er messages array-te notun message add kora
        const updatedChats = chats.map((chat, index) => {
            if (index === selectedChatIndex) {
                return {
                    ...chat,
                    messages: [...chat.messages, newMessage],
                    preview: inputValue, // Update left panel preview
                    time: now.toLocaleTimeString([], { minute: '2-digit' }) // Update left panel time
                };
            }
            return chat;
        });

        setChats(updatedChats);
        setInputValue('');
    };

    // --- FUNCTION TO HANDLE CHAT SELECTION ---
    const handleSelectChat = (index) => {
        setSelectedChatIndex(index);
    };


    return (
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
                    {/* Maps over the unified chats state */}
                    {chats.map((chat, index) => (
                        <div
                            key={chat.id}
                            onClick={() => handleSelectChat(index)} // ✅ Chat selection updates index
                            className={`px-4 py-3 cursor-pointer transition-all duration-200 ${selectedChatIndex === index ? 'bg-white' : 'hover:bg-gray-50'}`}
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

            {/* Right Panel - Message View (Uses dynamic currentChat data) */}
            <div className="flex-1 flex flex-col bg-[#F8F8F8] min-h-0">
                
                {/* Header */}
                <div className="px-4 md:px-6 py-3 border-b border-gray-200 bg-[#EEEEEE] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        {/* ✅ Dynamic Avatar */}
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${currentChat.avatar} border-2 border-blue-300 shadow-md flex items-center justify-center text-white font-bold text-xs md:text-base`}>{currentChat.initial}</div>
                        <div>
                            {/* ✅ Dynamic Name */}
                            <h2 className="font-semibold text-gray-900 text-sm md:text-base">{currentChat.name}</h2>
                            <p className="text-xs text-green-600 font-medium">Active</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 md:p-2 rounded-full hover:bg-gray-100 transition">
                        <MoreVertical size={20} />
                    </button>
                </div>

                {/* Messages Area - Uses currentMessages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-3 md:gap-4 bg-gradient-to-b from-white to-gray-50">
                    <div className="text-center py-2">
                        <p className="text-gray-400 text-xs md:text-sm font-medium">Thursday, Jan 4 • 6:21 PM</p>
                    </div>

                    {/* ✅ Maps over currentMessages of the selected chat */}
                    {currentMessages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} gap-2 md:gap-3`}>
                            {/* Non-sent messages show the sender's avatar/initial */}
                            {!msg.sent && (
                                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${currentChat.avatar} flex-shrink-0 shadow-md flex items-center justify-center text-white text-xs font-bold`}>{currentChat.senderInitial}</div>
                            )}
                            <div className={`max-w-[75%] md:max-w-sm px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl shadow-sm ${msg.sent ? 'bg-[#D4E4FC] text-gray-900 rounded-br-none' : 'bg-[#E4E7EC] text-gray-800 rounded-bl-none'}`}>
                                <p className="text-xs md:text-sm break-words">{msg.text}</p>
                                <span className="block text-[10px] text-gray-500 mt-1 text-right">{msg.time}</span>
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
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-900 placeholder-[#98A2B3]"
                            />
                        </div>

                        {/* Send button */}
                        <button
                            onClick={handleSend}
                            className="bg-white hover:bg-[#F0F2F5] h-10 w-10 md:h-12 md:w-12 flex justify-center items-center rounded-full text-xl md:text-2xl text-blue-500 hover:text-blue-600 shadow-md transition flex-shrink-0"
                        >
                            <BiSend />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}