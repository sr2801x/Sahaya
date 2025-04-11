
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  actionText?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  iconBg,
  actionText = "Learn More",
  className,
}: FeatureCardProps) => {
  return (
    <div className={cn("tech-card flex flex-col h-full transition-transform hover:translate-y-[-5px]", className)}>
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        iconBg
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      
      <Button 
        variant="ghost" 
        className="text-sahaya-blue hover:text-white hover:bg-sahaya-blue/20 p-0 self-start group"
      >
        {actionText} 
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default FeatureCard;
