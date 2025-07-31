import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'subtle' | 'premium';
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: GlassCardProps) {
  const baseClasses = "backdrop-blur-md border border-white/20 rounded-xl transition-all duration-200 ease-in-out";
  
  const variantClasses = {
    default: "bg-white/10 shadow-lg",
    elevated: "bg-white/15 shadow-xl",
    subtle: "bg-white/8 shadow-md",
    premium: "bg-white/12 shadow-2xl border-white/30"
  };

  const hoverClasses = hover ? "hover:shadow-xl hover:bg-white/15 hover:-translate-y-1" : "";

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
      style={{
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {children}
    </div>
  );
}

export function GlassTag({ 
  children, 
  className,
  variant = 'default'
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'featured' | 'accent';
}) {
  const variantClasses = {
    default: "bg-white/20 text-gray-800",
    featured: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-900 border-blue-200/30",
    accent: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-900 border-green-200/30"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "backdrop-blur-md border border-white/20 shadow-sm",
        "transition-all duration-200 hover:scale-105 hover:shadow-md",
        variantClasses[variant],
        className
      )}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {children}
    </span>
  );
}

export function GlassButton({ 
  children, 
  className, 
  variant = 'default',
  size = 'default',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'danger';
  size?: 'sm' | 'default' | 'lg';
}) {
  const baseClasses = "rounded-lg font-medium transition-all duration-200 ease-in-out backdrop-blur-md border border-white/20 shadow-sm hover:shadow-md active:scale-95";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const variantClasses = {
    default: "bg-white/20 text-gray-800 hover:bg-white/30 hover:scale-105",
    primary: "bg-blue-500/20 text-blue-900 border-blue-200/30 hover:bg-blue-500/30 hover:scale-105",
    success: "bg-green-500/20 text-green-900 border-green-200/30 hover:bg-green-500/30 hover:scale-105",
    danger: "bg-red-500/20 text-red-900 border-red-200/30 hover:bg-red-500/30 hover:scale-105"
  };

  return (
    <button 
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function GlassModal({ 
  children, 
  isOpen, 
  onClose, 
  className 
}: { 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClose: () => void;
  className?: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div 
        className={cn(
          "bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl",
          "max-w-md w-full animate-in zoom-in-95 duration-200",
          className
        )}
        style={{
          WebkitBackdropFilter: 'blur(16px)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function GlassInput({ 
  className, 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 rounded-lg text-sm",
        "bg-white/20 backdrop-blur-md border border-white/20",
        "text-gray-800 placeholder-gray-500",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300/30",
        "hover:bg-white/25",
        className
      )}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
      {...props}
    />
  );
}

export function GlassTooltip({ 
  children, 
  content,
  position = 'top'
}: { 
  children: React.ReactNode; 
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  const arrowClasses = {
    top: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90",
    bottom: "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900/90",
    left: "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900/90",
    right: "absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900/90"
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div 
          className={cn(
            "absolute z-50 px-3 py-2 max-w-xs break-words text-sm text-white rounded-lg shadow-lg",
            "bg-gray-900/90 backdrop-blur-md border border-gray-700/50",
            "animate-in fade-in zoom-in-95 duration-150",
            positionClasses[position]
          )}
          style={{
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {content}
          <div className={arrowClasses[position]}></div>
        </div>
      )}
    </div>
  );
}

// Glass Background wrapper component
export function GlassBackground({ 
  children, 
  className,
  gradient = 'blue'
}: { 
  children: React.ReactNode; 
  className?: string;
  gradient?: 'blue' | 'purple' | 'green' | 'orange';
}) {
  const gradientClasses = {
    blue: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
    purple: "bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50",
    green: "bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50",
    orange: "bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50"
  };

  return (
    <div className={cn("min-h-screen", gradientClasses[gradient], className)}>
      {children}
    </div>
  );
}