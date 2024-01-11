async function getEmailsRequests(){
    return await fetch('http://localhost:3000/email-requests')
          .then((res) => res.json())
          .then((data) => data);
  }

