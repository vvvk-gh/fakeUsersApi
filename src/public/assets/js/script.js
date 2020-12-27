$(document).ready(()=>{
    
    // console.log('Document loaded');
    function getUsers() {
        $.get('/api/users' , (users)=>{
            console.log(users)
            let tableBody = $("#tableBody");
            tableBody.empty();
            for(let user of users){
                tableBody.append(`
                <tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.occupation}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                </tr>`);
            }
           
        })
    }
    
    getUsers();

    $('#submit').click(()=>{
        // console.log(`button clicked`);

    let name = $('#name').val()
    let age = $('#age').val()
    let occupation =$('#occupation').val();
    let email = $('#email').val();
    let gender = $("input[name=gender]:checked").val();
    let userData = {email, name , age , occupation , gender} 
    if(!(age)|| !(name) || !(occupation) || !(email)|| !(gender)){
        alert('All fields are mandatory');
    }
    else{
        $.post('/api/users' ,userData,(postdata)=>{
            console.log(postdata);
            getUsers();
        });
    }
   
});
    

    

});