import getData from "../Api/getData.js";

const showData = async() =>{
    const data = await getData();
    const div = document.getElementById("contai");

    data.forEach(e =>{
        let pe =document.createElement("p");
        pe.innerHTML = e.house;
        div.appendChild(pe);
    })
}

export default showData;