// external modules
import { FC, useState } from "react";
import { Component, Area, Container, Chat } from "./Popup.styles";

// internal modules
import { getImprovedReport } from "@/utils/services/assistant";
import { MessageProps } from "@/types/message.props";
import extension from "@/utils/json/extension.json";

// components
import Heading from "@/components/Heading/Heading";
import Intro from "@/components/Intro/Intro";
import Textarea from "@/components/Textarea/Textarea";
import Messages from "@/components/Messages/Messages";

interface PopUpProps {}

const PopUp: FC<PopUpProps> = () => {
  // states
  const [report, setReport] = useState("");
  const [alert, setAlert] = useState(false)
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [waiting, setWaiting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // variables
  const { title, description } = extension;
  const isValidReport = report.replace(/\s/g, "").length >= 75

  const reviewReport = async () => {
    if (report && isValidReport) {
      const userMessage = { role: "user", text: report };
      const currentURL = window.location.href
      setMessages([userMessage]);
      setWaiting(true);
      showChat();

      const response = await getImprovedReport(report, currentURL);
      const success = response.status === 200

      if (success) {
        const assistantMessage = { role: "assistant", text: response.data.answer};
        setMessages((current) => [...current, assistantMessage]);
        resetCurrentStates()
      }
      else {
        const errorMessage = { role: "error", text: response.data.message };
        setMessages((current) => [...current, errorMessage]);
        resetCurrentStates()
      }
    }
    else {
      setAlert(true)
    }
  };

  const showChat = () => {
    setShowButton(true);
    setShowIntro(false);
  };

  const resetChat = () => {
    setShowButton(false);
    setShowIntro(true);
  };

  const resetCurrentStates = () => {
    setWaiting(false);
    setReport("");
    setAlert(false)
  }

  return (
    <Component>
      {showIntro ? null : (
        <Heading title={title} action={resetChat} showButton={showButton} />
      )}

      <Area>
        {showIntro ? (
          <Container>
            <Intro title={title} description={description} />

            <Textarea
              placeholder={`Escreva seu report...`}
              send={reviewReport}
              value={report}
              alert={alert}
              getValue={(e) => setReport(e.currentTarget.value)}
            />
          </Container>
        ) : (
          <Chat>
            <Messages messages={messages} waiting={waiting} />
          </Chat>
        )}
      </Area>
    </Component>
  );
};

export default PopUp;
