// external modules
import { FC } from "react";
import { Sparkle } from "@phosphor-icons/react";

// internal modules
import { Component } from "./Textarea.styles";

interface TextareaProps {
  className?: string;
  placeholder: string;
  value: string;
  alert: boolean;
  send: VoidFunction;
  getValue: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
  className,
  placeholder,
  value,
  alert,
  send,
  getValue,
}) => {
  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      send()
      e.preventDefault();
    }
  };

  return (
    <Component className={`${className}`}>
      <form>
        {alert ? 
          <p>
            {`Adicione mais detalhes para receber uma descrição mais completa :)`}
          </p> 
        : null}

        <textarea
          value={value}
          spellCheck="false"
          placeholder={placeholder}
          onKeyDown={handleEnterSubmit}
          onInput={getValue}
        ></textarea>

        <button type={`button`} title={``} onClick={send}>
          <Sparkle size={22} />
          <p>{`Gerar Report`}</p>
        </button>
      </form>
    </Component>
  );
};

export default Textarea;
