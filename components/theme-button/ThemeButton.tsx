import { toggleTheme } from "@/redux/slices/global";
import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
// import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const dispatch = useDispatch();
  function themeHandler() {
    dispatch(toggleTheme());
  }
  const theme = useSelector((store: RootState) => store.global.theme);

  return (
    <div className="cursor-pointer" onClick={themeHandler}>
      {theme === "light" ? (
        <Icon icon="streamline-emojis:crescent-moon" width="40" height="40" />
      ) : (
        <Icon icon="twemoji:sun" width="40" height="40" />
      )}
    </div>
  );
}
