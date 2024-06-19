import { useState, useEffect, useRef } from "react";

export default function EditableText({
  label,
  initialText,
  onChange,
  textClass,
  component: Component = "p",
}) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleTextClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <>
      {isEditing ? (
        <label>
          {label + " "}
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={handleTextChange}
            onBlur={() => setIsEditing(false)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </label>
      ) : (
        <Component
          onClick={handleTextClick}
          className={"editable " + textClass}
        >
          {text}
        </Component>
      )}
    </>
  );
}
