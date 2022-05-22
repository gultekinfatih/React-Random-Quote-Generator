import React from "react";
import { useState, useEffect } from "react";
function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url).then((res) =>
      res.json().then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
    );
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="App" style={{ backgroundColor: "#" + `${randomColor}` }}>
      <div id="quote-box">
        <div id="text">
          <i className="fas fa-quote-left"></i> {quote}
        </div>
        <div id="author">
          <p>
            <i>-{author}</i>
          </p>
        </div>
        <div id="buttons">
          <div className="social-media">
            <a
              href="https://twitter.com/intent/tweet?text=Quote"
              id="quote-icon"
              style={{ backgroundColor: "#" + `${randomColor}` }}
            >
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://tumblr.com/"
              id="quote-icon"
              style={{ backgroundColor: "#" + `${randomColor}` }}
            >
              <span>
                <i className="fa-brands fa-tumblr"></i>
              </span>
            </a>
          </div>
          <button
            onClick={handleClick}
            id="new-quote"
            style={{ backgroundColor: "#" + `${randomColor}` }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
