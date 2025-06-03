// external modules
import { FC } from "react";
import showdown from "showdown";
import { SmileySad } from "@phosphor-icons/react";

// internal modules
import { Component, Message } from "./Messages.styles";
import { MessageProps } from "@/types/message.props";
import CopyButton from "@/components/CopyButton/CopyButton";
import Waiting from "@/components/Waiting/Waiting";

interface MessagesProps {
  className?: string;
  waiting: boolean;
  messages: MessageProps[];
}

const Messages: FC<MessagesProps> = ({ className, waiting, messages }) => {
  const converter = new showdown.Converter();
  const confirmText = `report copiado`;

  const transition = {
    duration: 0.2,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <Component className={`${className}`}>
      {messages.map((message, index) => (
        <div className={message.role} key={index}>
          {message.role === "assistant" ? (
            <CopyButton textToCopy={converter.makeHtml(message.text)} confirmText={confirmText} />
          ) : null}

          {message.role === "error" ? <SmileySad size={32} /> : null}

          <Message
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(message.text),
            }}
          />

          {message.role === "assistant" ? (
            <CopyButton textToCopy={converter.makeHtml(message.text)} confirmText={confirmText} />
          ) : null}
        </div>
      ))}

      {waiting ? <Waiting text={`Gerando report detalhado`} /> : null}
    </Component>
  );
};

export default Messages;
