import React from "react";
import { selectTheme } from "../state/slices/themeSlice";
import { useAppSelector } from "../hooks";

interface RadioGroupProps {
  buttons: string[];
  active: string;
  onChange: (button: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ buttons, active, onChange }) => {
  const curTheme = useAppSelector(selectTheme);

  const bgColor = curTheme.name === "light" ? "#f3f3f3" : "#2d2e32";
  const activeColor = curTheme.name === "light" ? "#ddd" : "#5a5d63";

  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${activeColor}`,
        borderRadius: 5,
        display: "flex",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {buttons.map((button) => (
        <div
          onClick={() => onChange(button)}
          style={{
            fontSize: 13,
            textAlign: "center",
            cursor: "pointer",
            background: active === button ? activeColor : bgColor,
            transition: "background 0.3s ease",
            width: "33.33%",
          }}
        >
          {button[0].toUpperCase() + button.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
