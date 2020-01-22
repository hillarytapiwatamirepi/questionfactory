export function postCardData(question){

    return fetch('/api/addquestions', {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(question)
}).then((data)=>console.log(data))
;
}