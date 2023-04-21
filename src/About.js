import React from 'react';
import './About.css';
function About() {
  return (
    <div className='about'>
      <br></br>
      <h1>About This Program</h1>
      <p>This program generates random quotes using the <a href="http://api.quotable.io/">Quotable API</a> and allows you to copy, translate, and share them.</p>
      <p>The quote is fetched from the API when the page loads and can be refreshed using the "Generate New Quote" button. The "Copy Quote" button copies the quote to the clipboard. The "Translate to Tamil" button uses the Google Translate API to translate the quote to Tamil. The "Share Quote" button allows you to share the quote on various social media and messaging platforms.</p>
      <p>This program was built using React and various other packages, such as <a href="https://react-bootstrap.github.io/">React Bootstrap</a> for styling, <a href="https://clipboardjs.com/">Clipboard.js</a> for copy functionality, and <a href="https://www.npmjs.com/package/google-translate-api">google-translate-api</a> for translation functionality.</p>
    </div>
  );
}

export default About;
