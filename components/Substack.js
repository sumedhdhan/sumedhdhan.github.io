// components/Substack.js
import React, { useEffect } from 'react';

const Substack = ({ substackUrl, placeholder, buttonText, theme }) => {
  useEffect(() => {

     // Configuration for the Substack Feed widget
     window.CustomSubstackWidget = {
        substackUrl: substackUrl,
        placeholder: placeholder,
        buttonText: buttonText,
        theme: theme
      };
  
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [substackUrl, placeholder, buttonText, theme]);

  return (
    <div id="custom-substack-embed"></div>
  );
};

export default Substack;
