import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  rows = 3,
  className = ''
}) => {
  const hasError = !!error;
  const isEmpty = !value.trim();

  return (
    <div className={cn('space-y-2', className)}>
      <Label 
        htmlFor={name}
        className={cn(
          'block text-sm font-semibold transition-colors duration-200',
          hasError ? 'text-destructive' : 'text-foreground',
          !isEmpty && !hasError && 'text-secondary'
        )}
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      
      <div className="relative">
        {type === 'textarea' ? (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            required={required}
            className={cn(
              'w-full resize-none text-sm transition-all duration-300 focus:ring-2',
              hasError 
                ? 'border-destructive focus:ring-destructive/20 focus:border-destructive' 
                : 'border-border focus:ring-secondary/20 focus:border-secondary',
              !isEmpty && !hasError && 'border-secondary/50'
            )}
          />
        ) : (
          <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            className={cn(
              'w-full h-10 text-sm transition-all duration-300 focus:ring-2',
              hasError 
                ? 'border-destructive focus:ring-destructive/20 focus:border-destructive' 
                : 'border-border focus:ring-secondary/20 focus:border-secondary',
              !isEmpty && !hasError && 'border-secondary/50'
            )}
          />
        )}
        
        {/* Success indicator */}
        {!isEmpty && !hasError && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Error message with animation */}
      <div className={cn(
        'min-h-[20px] transition-all duration-300 transform',
        error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
      )}>
        {error && (
          <p className="text-destructive text-xs font-medium flex items-center">
            <span className="w-1 h-1 bg-destructive rounded-full mr-2 animate-pulse"></span>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};