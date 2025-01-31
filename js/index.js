let result = {  
    "tag": "",
    "free": true,
    "role": false,
    "user": "devvrat.coding",
    "email": "devvrat.coding@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
    
} 

submitBtn.addEventListener('click', async(e) => {
    e.preventDefault(); 
    console.log('clicked');

    resultCont.innerHTML = "<div class = 'loading'>Loading...</div>";
    
    let email = document.getElementById('email').value;
    let key = "ema_live_0OeNxT20TNPTXA9jdB7bWTP2Ao0GERg2UoY7StjB"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = "";
    for(key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " "){
            str += `<div>${key}: ${result[key]}</div>`;
        }
        
    }
    console.log(str);
    resultCont.innerHTML = str;
})



