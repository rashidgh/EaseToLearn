// AboutPage.js

import React from "react";

function AboutPage() {
  return (
    <div>
      <h2>About Provision Store</h2>
      <p>
        <strong>Folder Structure:</strong>
        <br />
        Our project follows a structured file organization:
        <ul>
          <li>
            <strong>src/</strong>: Contains the main source code.
          </li>
          <li>
            <strong>src/components/</strong>: Holds React components.
          </li>
          <li>
            <strong>src/api/</strong>: Includes files for API handling.
          </li>
          <li>
            <strong>src/assets/</strong>: Stores images and other assets.
          </li>
          <li>
            <strong>public/</strong>: Holds static files like index.html.
          </li>
          <li>... (Other necessary folders)</li>
        </ul>
      </p>
      <p>
        <strong>Development Challenges:</strong>
        <br />
        During development, we encountered challenges like handling API
        authentication and routing. Additionally, ensuring consistent UI/UX
        across various components required meticulous styling.
      </p>
      <p>
        <strong>Project Setup:</strong>
        <br />
        To start the project:
        <ol>
          <li>Clone the repository from the project source.</li>
          <li>Install necessary dependencies using `npm install`.</li>
          <li>Ensure the correct versions of Node.js and npm are installed.</li>
          <li>Run the project using `npm start`.</li>
        </ol>
      </p>
    </div>
  );
}

export default AboutPage;
