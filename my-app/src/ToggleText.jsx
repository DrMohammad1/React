import React, { useState } from 'react';  

const ToggleText = () => {  
  const [showText, setShowText] = useState(false);  

  const toggleText = () => {  
    setShowText(!showText);  
  };  

  return (  
    <div>  
      <button onClick={toggleText}>  
        {showText ? 'Hide Text' : 'Show Text'}  
      </button>  
      {showText && <p>Hello, World!</p>}  
    </div>  
  );  
};  

export default ToggleText;