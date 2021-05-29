// export async function getQuotesData() {
//   const getQuotes = async () => {
//     const response = await fetch("quotes.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     if (response) {
//       const jsonValue = await response.json();
//       return Promise.resolve(jsonValue);
//     } else {
//       return Promise.reject("poop");
//     }
//   };
//
//   return await getQuotes().then((result) => {
//     return result;
//   });
// }
//

export function getRandomQuote(quoteArray) {
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomIndex];
}
