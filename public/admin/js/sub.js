async function getEmailsRequests(){
    return await fetch('http://localhost:3000/email-requests')
          .then((res) => res.json())
          .then((data) => data);
  }


//Deleting request by clicking remove button (X)
 let Block = document.querySelector('#v-pills-sub');

//event delegation
Block.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('#id').value; //request.id
        fetch('http://localhost:3000/email-requests/'+id,{
            method:'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());

    }
})