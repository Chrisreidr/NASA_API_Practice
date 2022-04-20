
document.querySelector('button').addEventListener('click', spaceImg)





function spaceImg() {
    const dateInput = document.querySelector('.dateInput').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=31PFhFha5kK8Pti6BZXpduHgeetG91TFfn35wmUh&date=${dateInput}`
    console.log(dateInput);
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.media_type === 'image') {
            document.querySelector('h2').innerText = data.title
            document.querySelector('.dateImg').src = data.hdurl;
            document.querySelector('.dateImg').classList.remove('hidden');
            document.querySelector('h3').innerText = data.explanation;
            document.querySelector('iframe').classList.add('hidden');
        } else if(data.media_type === 'video') {
            document.querySelector('h2').innerText = data.title
            document.querySelector('iframe').src = data.url;
            document.querySelector('.dateImg').classList.add('hidden');
            document.querySelector('h3').innerText = data.explanation;
            document.querySelector('.dateImg').src = '';
            document.querySelector('iframe').classList.toggle('hidden');
        }
    })
    .catch(error => console.log(`error: ${error}`))
}

// function sameCase(a, b){
//     const testA = /^[a-zA-Z]+$/.test(a);
//     const testB = /^[a-zA-Z]+$/.test(b);
//     const testLowerA = /^[a-z]+$/.test(a);
//     const testLowerB = /^[a-z]+$/.test(b);
//     const testUpperA = /^[A-Z]+$/.test(a);
//     const testUpperB = /^[A-Z]+$/.test(b);
//     console.log(testA, testB);
//     if(testLowerA && testLowerB || testUpperA && testUpperB) {
//       return 1
//     } else if (testA || testB) {
//       return -1;
//     } else {
//       return 0;
//     }
// }
// console.log(sameCase('B',' '));