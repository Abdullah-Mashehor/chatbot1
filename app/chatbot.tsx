"use client"

import Script from 'next/script';
import React, { useEffect } from 'react';

interface CustomWindow extends Window {
  embeddedChatbotConfig?: {
    chatbotId: string;
    domain: string;
  };
}

const Chatbot: React.FC = () => {
  const initChatbase = () => {
    // Type assertion to let TypeScript know that window can have this property
    (window as CustomWindow).embeddedChatbotConfig = {
      chatbotId: "D-H9KxrtIYQwQhC6JBFiZ",
      domain: "www.chatbase.co"
    };
  };

  useEffect(() => {
    initChatbase();
  }, []);

  return (
    <>
      {/* This is where you should place the Script component */}
      <Script
        src='https://www.chatbase.co/embed.min.js'
        onLoad={() => {
          initChatbase();
        }}
      />
    </>
  );
};

export default Chatbot;
