import { useAtomValue } from "jotai";
import { isDark } from "./atoms/theme/store";

function CurrentTheme() {
  const _isDark = useAtomValue(isDark);
  return (
    <div>
      <p>is using dark theme: {_isDark ? "true" : "false"} </p>
    </div>
  );
}

export default CurrentTheme;
