
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Package, Map } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import QuickReply from './QuickReply';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! I\'m your Sahaya Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const quickReplies = [
    {
      id: '1',
      label: 'Nearest relief camp',
      icon: <MapPin className="w-4 h-4 mr-1" />,
      message: 'Where is the nearest relief camp?'
    },
    {
      id: '2',
      label: 'Emergency packing',
      icon: <Package className="w-4 h-4 mr-1" />,
      message: 'What should I pack in an emergency?'
    },
    {
      id: '3',
      label: 'Safest route',
      icon: <Map className="w-4 h-4 mr-1" />,
      message: 'Show me the safest route'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (message: string) => {
    setIsTyping(true);
    
    // Simulated response delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let response = '';
    
    if (message.toLowerCase().includes('relief camp') || message.toLowerCase().includes('nearest')) {
      response = 'Based on your current location, the nearest relief camp is at City Community Center (5 km away). They have capacity for 200 people and basic medical facilities.';
    } else if (message.toLowerCase().includes('pack') || message.toLowerCase().includes('emergency')) {
      response = 'For your emergency kit, pack: 1) Water (1 gallon per person per day) 2) Non-perishable food 3) Flashlight 4) First aid kit 5) Battery-powered radio 6) Medications 7) Cash 8) Important documents in waterproof container 9) Blankets 10) Personal hygiene items';
    } else if (message.toLowerCase().includes('route') || message.toLowerCase().includes('safest')) {
      response = 'The safest evacuation route from your location is to take Main Street heading north, then turn east on Highland Avenue. Avoid the downtown area due to flooding. Would you like me to show this on a map?';
    } else {
      response = 'I\'m here to help with disaster-related information. You can ask me about relief camps, emergency packing, or safe evacuation routes.';
    }
    
    const newBotMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newBotMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    generateResponse(inputValue);
  };

  const handleQuickReply = (message: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    generateResponse(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat trigger button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="w-14 h-14 rounded-full bg-sahaya-blue hover:bg-sahaya-blue/90 text-white shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}
      
      {/* Chat container */}
      {isOpen && (
        <div className="tech-card w-80 sm:w-96 h-[500px] flex flex-col shadow-xl animate-scale-in overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-sahaya-blue flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Sahaya Assistant</h3>
                <p className="text-xs text-gray-400">AI-powered disaster help</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message.content} 
                sender={message.sender}
              />
            ))}
            {isTyping && (
              <div className="flex items-center space-x-1 p-3 w-fit bg-gray-800 rounded-lg rounded-bl-none mb-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75" />
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick replies */}
          <div className="px-3 py-2 border-t border-gray-700">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickReplies.map((reply) => (
                <QuickReply 
                  key={reply.id}
                  icon={reply.icon}
                  label={reply.label}
                  onClick={() => handleQuickReply(reply.message)}
                />
              ))}
            </div>
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t border-gray-700 flex items-center gap-2">
            <input 
              type="text"
              className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sahaya-blue"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white rounded-lg"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
