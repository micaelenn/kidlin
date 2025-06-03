// external modules
import { FC, useState } from "react";
import { Copy, CheckCircle } from "@phosphor-icons/react";

// internal modules
import { Component, Toast } from "./CopyButton.styles";

interface CopyButtonProps {
  className?: string;
  textToCopy: string;
  confirmText: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  className,
  textToCopy,
  confirmText,
}) => {
  const [confirm, setConfirm] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: -80, y: 40 },
    enter: { opacity: 1, x: -80, y: 0 },
    exit: { opacity: 0, x: -80, y: -90 },
  };

  const copyText = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = textToCopy;
    const plainText: string = tempDiv.innerText || tempDiv.textContent || ''

    navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([plainText], { type: 'text/plain' }),
        'text/html': new Blob([textToCopy], { type: 'text/html' }),
      }),
    ]).then(() => {
      setConfirm(true);

      setTimeout(() => {
        setConfirm(false);
      }, 3000); // 3s
    });
  };

  return (
    <Component className={`${className}`}>
      <button onClick={copyText} title={`copy to clipboard`}>
        <Copy size={24} />
      </button>

      {confirm && confirmText ? (
        <Toast
          className={`${className}`}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", delay: 0.2, duration: 0.2 }}
        >
          <CheckCircle size={20} />
          <span>{confirmText}</span>
        </Toast>
      ) : null}
    </Component>
  );
};

export default CopyButton;
