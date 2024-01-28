let btn=document.querySelector(".container button")


const apiKeyData={
    method:`GET`,
    headers:{'X-Api-Key':"OtwW1DFnu53NZEyJovY4YA==meUNY1GexTCSsYqQ"}
}


btn.addEventListener("click", ()=>{
    setTimeout(async ()=>{
        let data= await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",apiKeyData);
        let joke=await data.json();
        console.log(joke);
        document.querySelector(".para").innerText=`${joke[0].joke}`
        btn.innerText="TELL ME A JOKE"
    },2000)
   
    document.querySelector(".para").innerText="Updating..."
    btn.innerText="Loading..."
    
})
