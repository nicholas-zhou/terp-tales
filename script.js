async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[INSERT API KEY]',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://planetterp.com/api/v1/professor?name=Nelson Padua-Perez&reviews=true', options)
    const record = await res.json()

}
fetchData(); 