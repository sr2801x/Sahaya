
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
}

const ChatMessage = ({ message, sender }: ChatMessageProps) => {
  return (
    <div className={cn(
      "mb-3 max-w-[85%] animate-fade-in",
      sender === 'user' ? "ml-auto" : "mr-auto"
    )}>
      <div className={cn(
        "p-3 rounded-lg",
        sender === 'user' 
          ? "bg-sahaya-blue text-white rounded-br-none" 
          : "bg-gray-800 text-white rounded-bl-none"
      )}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
