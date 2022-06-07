makeReqGalleryPhoto()
const gallery = document.getElementById("gallery")
document.querySelector('#clickMe').addEventListener('click', makeReqPhoto)

async function makeReqPhoto(){

  const photoNumber = document.querySelector("#photoNumber").value;
  const res = await fetch(`/api?photo=${photoNumber}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#photo").src = data[0].url

}

function getClass(i) {
  if (i % 5 === 0) {
      return 'big';
  }
  else if (i % 6 === 0) {
      return 'wide'
  }
}
async function makeReqGalleryPhoto(){

  const res = await fetch(`/api?photos`)
  const data = await res.json()
  console.log(data);
  data.forEach((photo,index) => gallery.innerHTML += `<img class=${getClass(index)} src="${photo.url}"/>`)
    
  
}