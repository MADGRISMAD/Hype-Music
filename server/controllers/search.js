
exports.getIndex = async(req,res) => {
    res.status(200).json({
        message: 'Test API is working',
    })
}
exports.search = async(req,res) => {
    const url = 'https://spotify23.p.rapidapi.com/search/?q=eminem&type=tracks&offset=0&limit=10&numberOfTopResults=5';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7d3f905850msha1adc70c28e5ca8p163087jsn2a6a28fcdc19',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
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