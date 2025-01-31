import React from "react";
import { selectTheme } from "../state/slices/themeSlice";
import { useAppSelector } from "../hooks";

interface RadioGroupProps {
  buttons: string[];
  active: string;
  onChange: (button: string) => void;
}

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

const RadioGroup: React.FC<RadioGroupProps> = ({ buttons, active, onChange }) => {
  const curTheme = useAppSelector(selectTheme);

  return (
    <div className={["prerequisites-radio-group", curTheme.name].join(" ")}>
      {buttons.map((button) => (
        <div
          onClick={() => onChange(button)}
          className={[
            "prerequisites-radio-btn",
            active === button && "active",
            curTheme.name,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {capitalize(button)}
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
