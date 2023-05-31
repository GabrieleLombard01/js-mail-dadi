//JS RESET
console.log('JS OK')
// recupero gli elementi dal DOM
const mailInput = document.getElementById('email');
const button = document.getElementById('button');

//creo la lista arey
const emailList = ['gabbo.lombardo2001@gmail.com', 'valentino.rossi@gmail.com','luca.sape@gmail.it', 'ciccio.bomba@gmail.it', 'gabriele.lombardo@gmail.com'];

button.addEventListener('click', function(){
    
    const userEmail = mailInput.value.trim();

     console.log(userEmail)

    // creo un ciclo x mail gia presente
    for (let i = 0; i < emailList.length; i++ ){
        
        if (emailList.includes(userEmail)){
            console.log('Email già presente');
        } else {
            emailList.push(userEmail);
            console.log('Email aggiunta');
        }
    } 
});