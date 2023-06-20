async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=7d1fcb0d-b7d8-4d28-9f8c-2d6aa95d9d93&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}, ${match.venue}, ${match.date}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();