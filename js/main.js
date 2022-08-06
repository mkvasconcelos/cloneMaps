async function weather() {
    city = $("#city").val()
    if (city == "") {
        return
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65d60f25dfmsh6fdf6ccbd0f8f35p1b4c60jsn0399460e321a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => result = response.json())
        // .then(response => console.log(response['current']['temp_c']))
        .catch(err => console.error(err));
    let data = await result
    console.log(data['current'])
    console.log(data['location'])
}