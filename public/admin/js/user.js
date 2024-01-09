async function getUserRequests(){
    return await fetch('http://localhost:3000/user_login/register')
          .then((res) => res.json())
          .then((data) => data);
  }


//Deleting request by clicking remove button (X)
 let userBlock = document.querySelector('#v-pills-user');

//event delegation
userBlock.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-remove')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value; //request.id
        fetch('http://localhost:3000/user_login/register'+id,{
            method:'DELETE'
        }).then((res) => res.text())
        .then(() => window.history.go());

    }
})