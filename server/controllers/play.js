exports.getSong = async(req,res) => {
    const url = 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud?track=' + req.query.song;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a609cc4ba2msh3df38dcc50581b9p1a30b3jsn8b9ec6cb959b',
        'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.status(200).json(JSON.stringify(result));
        
    } catch (error) {
        console.error(error);
    }
}