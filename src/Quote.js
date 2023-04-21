import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import "./Quotestyle.css"
import Clipboard from 'clipboard';


function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    // http://api.quotable.io/random
  
    useEffect(() => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    },[]);
    useEffect(() => {
      const clipboard = new Clipboard('.copy-quote-btn');
      clipboard.on('success', () => {
        alert('Quote copied to clipboard!');
      });
      return () => clipboard.destroy();
    }, [quote, author]);
  
    let fetchNewQuote = () => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    }

  return (
    <div className='App'>
        <div className="quote">
            <h2>{quote}</h2>
            <small>-{author}-</small>
        </div><br />
        <center>
          <br/>
            <Button style={{textColor:"aliceblue"}} variant="primary" onClick={fetchNewQuote}>Generate New Quote</Button>
        <Button style={{textColor:"aliceblue"}} variant="secondary" className="copy-quote-btn" data-clipboard-text={`"${quote}" -${author}-`}>Copy Quote</Button>
        </center>
    </div>
  )
}

export default Quote;