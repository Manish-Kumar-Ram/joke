// let apiky='zGfHA6InC3eteUdtNjWMjw==LxcAh8aueKKlgH2j';
// const dadjokes= async()=>{

//     const fe= await fetch(`https://api-ninjas.com/api/dadjokes${apiky}`)
//     const jsondata= await fe.json();
//     console.log(jsondata);
// }
// // dadjokes()
// const headers={ 'X-Api-Key': 'YOUR_API_KEY'}
// const fetchapi=async()=>{
// const response=await fetch('https://api.api-ninjas.com/v1/dadjokes',headers);
// const data=await response.json();
// console.log(data);
// }
// fetchapi()
// const limit = 3;
// let btn=document.getElementById('btns');

// const apiKey = 'zGfHA6InC3eteUdtNjWMjw==LxcAh8aueKKlgH2j';
// const url = `https://api.api-ninjas.com/v1/dadjokes`;
// let jokes=document.getElementById('jokes')


// btn.addEventListener('click',()=>{
//     fetch(url, {
  
//         method: 'GET',
//         headers: {
//             'X-Api-Key': apiKey,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // return response.json();
//         // jokes.innerText=response.json()[0]
//         console.log( response.json());
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// })
let jokes = document.getElementById('jokes');

const apiKey = 'zGfHA6InC3eteUdtNjWMjw==LxcAh8aueKKlgH2j';
const url = `https://api.api-ninjas.com/v1/dadjokes`;
let btn = document.getElementById('btns');

btn.addEventListener('click', async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        jokes.innerText = data[0].joke; // Display the first joke (you may want to iterate over all jokes)
        console.log(data); // Log the fetched jokes data
    } catch (error) {
        console.error('Error:', error);
    }
});
