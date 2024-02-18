import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css'; // Import CSS file for styling

function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div className="chatbot-container">
      <button type = "button" className={`chatbot-toggle-button ${clicked ? 'clicked' : ''}`} onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faRobot} />
      </button>
      <div className={`chatbot-iframe-container ${showChatbot ? 'visible' : 'hidden'}`}>
        <iframe
          title="Dialogflow Chatbot"
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/e3084c84-8054-43bb-969d-ecedd7228a89" />
      </div>
    </div>
  );
}

export default Chatbot;
