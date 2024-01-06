let callMeForm = document.querySelector('.call-me-form');
let sub = document.querySelector('.sub-form')

//This event happens when the object document is completely loaded.
/*getPosts func. is an async. func. and that means that the variable called
posts is not going to wait for the answer from the getPosts func.
That's why we need to use async-await!!*/
document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts(); 
    //posts: we have an array of all post stored in the DB.
    let articles = document.querySelector('.articles');
    /*we have to be sure that every time we work with the articles,
    this div is empty without any articles*/
    articles.innerHTML='';

    posts.forEach((post) =>{
        let postHTML = `
        <div style="border: 1px solid #ccc; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);margin-right: 20px; margin-bottom: 20px;">
    <img src="${post.imageUrl}" alt="${post.title}" style="width: 100%; height: auto; border-bottom: 1px solid #ccc;">
    <div style="padding: 15px;">
        <h4 style="margin: 0; font-size: 1.5em; color: #333;">${post.title}</h4>
        <p style="margin: 10px 0 15px 0; color: #666;">${post.description}</p>
        <div>
            <a href="/sight?id=${post.id}" style="text-decoration: none; color: #007bff; font-weight: bold;">Details</a>
        </div>
    </div>
</div>

`;
    //Let's add some articles
    articles.insertAdjacentHTML('beforeend', postHTML);
    })
})

sub.addEventListener('submit',function(e){
    e.preventDefault();
    let email = sub.querySelector('#email');
    fetch('http://localhost:3000/email-requests',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value
        })
    }).then((res) => res.text())
    .then(()=>alert('We will contact you soon!'))
})

callMeForm.addEventListener('submit', function(e){
    e.preventDefault();
    let phoneInput = callMeForm.querySelector('input');

    fetch('http://localhost:3000/callback-requests',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneInput.value
        })
    }).then((res) => res.text())
    .then(() => alert('We will call you back as soon as possible!'));
})

//Arrow button
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/