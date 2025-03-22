import { isDark } from "@/atoms/theme/store";
import { Checkbox } from "@/components/ui/checkbox";
import { useAtomValue, useSetAtom } from "jotai";

function ThemeSwitcher() {
  const setDark = useSetAtom(isDark);
  const dark = useAtomValue(isDark);
  const handleSetDark = () => {
    setDark(!dark);
  };

  return (
    <div>
      <Checkbox id="theme" onCheckedChange={handleSetDark} checked={dark} />
      <label
        htmlFor="theme"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Change to dark mode?
      </label>
    </div>
  );
}

export default ThemeSwitcher;
