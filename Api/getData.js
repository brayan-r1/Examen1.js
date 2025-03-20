import url from "./url.js";

async function getData(){
    
    try {
        const data = await fetch(url);
        if(!data.ok){
        throw new Error("Upps... :",data.status);
        }
        let dataJson = await data.json();
        console.log(dataJson);
        return dataJson;

    } catch (error) {
       console.log(error.message);
    }
}
export default getData;
