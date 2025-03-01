import { Button } from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { Plus } from "@/lib/icons";
import { useTasksStore } from "@/stores/taskStore";
import { useState } from "react";
import { View } from "react-native";
import { IsHighlightButton } from "./IsHighlightButton";

export const TaskInput = () => {
  const [todo, setTodo] = useState("");
  const [isHighlight, setIsHighlight] = useState(false);
  const { addTask } = useTasksStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="round"
          size={"icon"}
          className="min-w-[160px] flex-row gap-1 justify-center items-center"
        >
          <Plus size={20} strokeWidth={4} fill={"#fff"} color={"#fff"} />
          <Text className="text-textOnDark font-bold uppercase">New task</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <View className="flex-row gap-5 items-center w-full">
            <DialogTitle>New task</DialogTitle>
            <IsHighlightButton
              isHighlight={isHighlight}
              onIsHighlightChange={() => setIsHighlight(!isHighlight)}
            />
          </View>
          <DialogDescription>
            <Input
              value={todo}
              onChangeText={setTodo}
              className="w-full"
              multiline
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="default"
              size={"icon"}
              className="w-full flex-row gap-1 justify-center items-center bg-accent"
              onPress={async () => {
                const success = await addTask(todo, isHighlight);
                if (success) {
                  setTodo("");
                  setIsHighlight(false);
                }
              }}
            >
              <Plus size={20} strokeWidth={4} fill={"#fff"} color={"#fff"} />
              <Text>New task</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
