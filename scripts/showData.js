async function getData(url){
    try{
        let res= await fetch(url)
    let data= res.json()
    
    return data
    }
    catch (er){
        console.log(er)
    }
    

}



function appendData (data,location) {
    data.forEach((elem) => {
        let div=document.createElement("div")

        let p=document.createElement("h1")
        p.innerText=elem.strMeal
        let image=document.createElement("img")
        image.src=elem.strMealThumb
        
        let dis=document.createElement("h3")
        dis.innerText=elem.strInstructions
        let link=document.createElement("h2")
        link.textContent=`Youtube Link - ${elem.strYoutube}`
        div.append(p,image,dis,link)

        location.append(div)

    });
}

export {getData,appendData}