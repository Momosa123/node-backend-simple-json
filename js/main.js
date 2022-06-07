document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const photoNumber = document.querySelector("#photoNumber").value;
  const res = await fetch(`/api?photo=${photoNumber}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#photo").src = data[0].url

}