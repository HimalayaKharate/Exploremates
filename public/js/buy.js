let buyForm = document.querySelector(".buyForm")

buyForm.addEventListener('submit', function(e){
    e.preventDefault();
    let fn = document.getElementById('fs').value
    let mn = document.getElementById('mn').value
    let ln = document.getElementById('ln').value
    let dateD = document.getElementById('dateD').value
    let dateR = document.getElementById('dateR').value
    let payId = document.getElementById('payId').value

    fetch('http://localhost:3000/buy/submit',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({fn : fn,mn: mn,ln:ln,dateD:dateD,dateR:dateR, payId:payId})
    }).then((res)=>{
        if(res.status === 400){
            throw new Error();
        }
        return res.json();
    }).then((data)=>{
        alert("Thanks for using our website!!")
        window.location.href = data.redirectURL;
    })
})