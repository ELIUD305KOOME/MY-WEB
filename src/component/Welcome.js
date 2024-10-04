import React, { useEffect } from 'react';

const Welcome = () => {
  useEffect(() => {
    const message = "You are viewing ELIUD KOOME's website. Feel welcomed and explore much about me at your own pace. I am currently open to job opportunities.";

    const speakMessage = () => {
      // Check if the browser supports speech synthesis
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = 'en-US';
        speech.rate = 1; // Adjust the speech rate
        speech.pitch = 1; // Adjust the pitch

        // Speak the message
        window.speechSynthesis.speak(speech);
      } else {
        console.log("Sorry, your browser doesn't support text-to-speech.");
      }
    };

    // Speak the message immediately
    speakMessage();

    // Set interval to speak the message every 60 seconds
    const intervalId = setInterval(speakMessage, 60000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    </div>
  );
};

export default Welcome;
