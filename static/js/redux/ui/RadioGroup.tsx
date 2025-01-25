import React from "react";

interface RadioGroupProps {
  buttons: string[];
  active: string;
  onChange: (button: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ buttons, active, onChange }) => (
    <div
      style={{
        width: "100%",
        border: "1px solid #ddd",
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
              background: active === button ? "#ddd" : "#f3f3f3",
              transition: "background 0.3s ease",
              width: "33.33%",
            }}
          >
            {button[0].toUpperCase() + button.slice(1)}
          </div>
        ))}
    </div>
  );

export default RadioGroup;
