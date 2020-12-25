$(document).ready(()=>{
    // console.log('Document loaded');

    $('#submit').click(()=>{
        // console.log(`button clicked`);

    let name = $('#name').val()
    let age = $('#age').val()
    let occupation =$('#occupation').val();
    let email = $('#email').val();
    let gender = $("input[name=gender]:checked").val();
    let userData = {email, name , age , occupation , gender} 
    $.post('/api/users' ,userData,(data)=>{
        console.log(data);
    });
});
    

    

});