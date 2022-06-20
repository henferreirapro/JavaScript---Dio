const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } 
    catch (e) {
        console.log("Tivemos um erro" + e.message);
    }
};

/*Usando then 
const getCats = async () => {
    const data =await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e));

    return data.webpurl;
};*/

const loadImg = async() => {
    const img = document.getElementById('cat');
    img.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();