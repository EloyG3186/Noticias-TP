// let loadNews = (filtro) => {
//     const url = 'https://ecuador-noticias-news.p.rapidapi.com/news/search?q=ecuador';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//             'X-RapidAPI-Host': 'ecuador-noticias-news.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }



let loadNews = () => {
    //Peticion asincrónica con fetch a un URL en formato JSON
    const URL = 'https://ecuador-noticias-news.p.rapidapi.com/news/search?q=ecuador';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a6576f608mshbe4c925e57bca6bp15705ajsnf99f566ea3cf',
            'X-RapidAPI-Host': 'ecuador-noticias-news.p.rapidapi.com'
        }
    };
    fetch(URL, options)
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })

        .catch(error => {

            /* Callback por fallo: Procese el error */

            console.log(error);

        });
}

let loadNews2 = () =>{
    const url = 'https://ecuador-noticias-news.p.rapidapi.com/news';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a6576f608mshbe4c925e57bca6bp15705ajsnf99f566ea3cf',
		'X-RapidAPI-Host': 'ecuador-noticias-news.p.rapidapi.com'
	}
};

try {
	const response =  fetch(url, options);
	const result = response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

//loadNews()
loadNews2()
