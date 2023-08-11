import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { timesArr } from "@/utils/globalData";

export const TimeFormField = ({ control }) => {
  return (
    <FormField
      control={control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cooking time</FormLabel>
          <Select onValueChange={field.onChange} defaultValue="30">
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {timesArr.map((time) => (
                <SelectItem key={time} value={time}>
                  {time} min
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
