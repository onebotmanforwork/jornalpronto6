//head

var js_int = document.querySelector('.icone2');
var js_x = document.querySelector('.x');

//body

js_int.addEventListener('click', () => {

    alert('O dia em que a matéria foi feita: 09/09/2023')

})

js_x.addEventListener('click', () =>{

    document.querySelector('.anuncio').style.display = "none";

    document.querySelectorAll('.teste').style.display = "none";
    
})