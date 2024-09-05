console.log(nome);

console.log(email);

console.log(idade);



    alert("Welcome !");



    //animação do titulo
const titulo = document.getElementById('titulo');

titulo.addEventListener('mouseover', () => {
  titulo.style.color = 'lightblue'; // Altera a propriedade 'color' para mudar a cor da fonte
});

titulo.addEventListener('mouseout', () => {
  titulo.style.color = 'black'; // Restaura a cor original
});


const botao = document.getElementById('botao');

botao.addEventListener('mouseover', () => {
  botao.style.opacity = 0.5; // Diminui a opacidade ao passar o mouse
});

botao.addEventListener('mouseout', () => {
  botao.style.opacity = 1; // Restaura a opacidade original
});