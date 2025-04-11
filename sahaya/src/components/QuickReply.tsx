
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface QuickReplyProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const QuickReply = ({ icon, label, onClick }: QuickReplyProps) => {
  return (
    <Button 
      variant="outline"
      className="flex items-center bg-gray-800 border-gray-700 hover:bg-gray-700 text-sm whitespace-nowrap"
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
};

export default QuickReply;
