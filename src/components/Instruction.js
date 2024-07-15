import React from 'react';

const Instruction = () => {
  return (
    <div className="instruction">
      <h2>How to Use the Weather App</h2>
      <p>To get the weather information:</p>
      <ul>
        <li>First, enter the <strong>city</strong> name in the form on the left and click <strong>"Get Location"</strong>. The latitude and longitude coordinates will be displayed below the form.</li>
        <li>Then, copy the displayed <strong>latitude</strong> and <strong>longitude</strong> and paste them into the form on the right.</li>
        <li>Click <strong>"Get Weather"</strong> to retrieve the weather information for the provided coordinates.</li>
      </ul>
    </div>
  );
};

export default Instruction;
