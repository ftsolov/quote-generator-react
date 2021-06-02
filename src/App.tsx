import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomQuote } from "./helpers.js";
import * as quotesJSON from "./quotes.json";

const App = () => {
  const [currentQuoteObject, setCurrentQuoteObject] = useState<any>(
    getRandomQuote((quotesJSON as any).default)
  );

  function handleButtonClick() {
    const quote = getRandomQuote((quotesJSON as any).default)
    $('#quote').fadeOut(300, function () {
      setCurrentQuoteObject(quote)
      $('#quote').fadeIn(300)
    })
  }

  function onKeyDown(e: any) {
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
      <div className="card" id={"quote-box"}>
        <div id={"quote"}>
          <h2 id={"text"}>{currentQuoteObject.quote}</h2>
          <p className="author" id={"author"}>
            - {currentQuoteObject.author}
          </p>
        </div>

        <div className={"buttons"}>
          <a
            id={"new-quote"}
            className="twitter bouncy"
            href={twitterLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <button onClick={handleButtonClick}>
            Give me another one!
          </button>
        </div>
      </div>
      <p className="hint">Hint: Press spacebar to get a new quote!</p>
    </div>
  );
};

export default App;
