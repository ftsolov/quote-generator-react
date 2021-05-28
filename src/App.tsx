import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuotesData, getRandomQuote } from "./helpers.js";

const App = () => {
  const [data, setData] = useState<Array<{ [id: string]: any }>>([]);

  function handleButtonClick() {
    getQuotesData().then((_data) => {
      setData(_data);
    });
  }

  useEffect(() => {
    getQuotesData().then((_data) => {
      setData(_data);
    });
  }, []);

  if (data.length > 0) {
    const { quote, author } = getRandomQuote(data);

    return (
      <div className="card">
        <h2>{quote}</h2>
        <p>- {author}</p>
        <div className={"buttons"}>
          <button className="twitter bouncy">
            <i className="fab fa-twitter" />
          </button>
          <button onClick={handleButtonClick}>
            <i className="fas fa-redo-alt" /> New quote!
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

// } else {
//   return <div></div>
// }

export default App;
