    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    setInterval(()=>{
        let curentTime = new Date();
    hrs.innerHTML= curentTime.getHours();
    min.innerHTML= curentTime.getMinutes();
    sec.innerHTML= curentTime.getSeconds();
    },1000)


