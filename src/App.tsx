import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomQuote } from "./helpers.js";
import * as quotesJSON from "./quotes.json";

const App = () => {
  const [currentQuoteObject, setCurrentQuoteObject] = useState<any>(
    getRandomQuote((quotesJSON as any).default)
  );

  function handleButtonClick() {
    const quote = getRandomQuote((quotesJSON as any).default);
    setCurrentQuoteObject(quote);
  }

  function onKeyDown(e: any) {
    console.log(e.code);
    if (e.code === "Space") {
      handleButtonClick();
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
  }, []);

  const twitterLink = `https://twitter.com/intent/tweet?text="${currentQuoteObject.quote}" - ${currentQuoteObject.author}`;

  return (
    <div>
      <div className="card">
        <h2>{currentQuoteObject.quote}</h2>
        <p className="author">- {currentQuoteObject.author}</p>
        <div className={"buttons"}>
          <a
            className="twitter bouncy"
            href={twitterLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <button onClick={handleButtonClick}>
            <i className="fas fa-redo-alt" /> New quote!
          </button>
        </div>
      </div>
      <p className="hint">Hint: Press spacebar to get a new quote!</p>
    </div>
  );
};

export default App;
