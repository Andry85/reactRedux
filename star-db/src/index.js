console.log('hello');


const getResource = async (url) => {
  const res = await fetch(url);

  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, received status ${res.status}`);
  }


  const body = await res.json();
  return body;
}


getResource('https://pixabay.com/api/?key=2953875-64107f3e4a827b9cba547e216&q=yellow+flowers&image_type=photo')
  .then((body)=>{
    console.log(body);
  })
  .catch((err)=>{
    console.error(err);
  })