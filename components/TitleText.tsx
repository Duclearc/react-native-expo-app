import { Text, TextProps } from "react-native";

export const TitleText = ({ className, children, ...props }: TextProps) => {
  return (
    <Text
      className={`text-3xl font-medium text-textDefault dark:text-textOnDark ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};
