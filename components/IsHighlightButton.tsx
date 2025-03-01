import { Star } from "lucide-react-native";
import { Pressable } from "react-native";

export const IsHighlightButton = ({
  isHighlight,
  onIsHighlightChange,
}: {
  isHighlight: boolean;
  onIsHighlightChange: () => void;
}) => {
  return (
    <Pressable onPress={onIsHighlightChange} className="relative right-5 p-3">
      <Star
        className={`${
          isHighlight ? "text-accent" : "text-disabled light:opacity-50"
        }`}
        fill={isHighlight ? "#FF531CBB" : "#00000000"}
      />
    </Pressable>
  );
};
