exports.getSong = async(req,res) => {
    const songId = new URLSearchParams(req.url).get("song");
    const url = 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud?track=' + songId;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '039c2fc7e8msh483a1607d2f72b7p19a785jsn2311317d30ee',
        'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        res.status(200).json(result);
        
    } catch (error) {
        console.error(error);
    }
}