export const getSong = async() => {
    const songId = new URLSearchParams(window.location.search).get("song");
    try{
        const res = await fetch("http://localhost:8080/play?song=" + songId, {
            method: "GET",
            headers: {
                
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        });

        return await res.json();
    }catch(err) {console.log(err);}
}