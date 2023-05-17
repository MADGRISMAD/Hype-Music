export const getIndex = async() => {
    try{
        const res = await fetch("http://localhost:8080/", {
            method: "GET",
            headers: {
                "Accept": "applcation/json",
                "Content-Type": "application/json"
            },
        });

        return await res.json();
    }catch(err) {}
}