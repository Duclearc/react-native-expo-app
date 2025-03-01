import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { TextInput, type TextInputProps } from 'react-native';

const Input = forwardRef<React.ElementRef<typeof TextInput>, TextInputProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "h-10 h-12 rounded-md border-2 border-disabled bg-background p-3 text-base lg:text-sm text-lg leading-[1.25] text-foreground placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium shadow-md shadow-foreground/20",
          props.editable === false && "opacity-50",
          className
        )}
        placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
