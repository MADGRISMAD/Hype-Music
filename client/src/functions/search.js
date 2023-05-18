export const getIndex = async() => {
    try{
        const res = await fetch("http://localhost:8080/", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return await res.json();
    }catch(err) {console.log(err);}
}

export const getSearch = async() =>{
    try{
        const res = await fetch('http://localhost:8080/search',{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return await res.json();
    }
    catch(err) {console.log(err);}
}