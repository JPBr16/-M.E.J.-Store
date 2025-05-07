document.getElementById('loginForm')?.addEventListener('submit', function(event) {
   event.preventDefault();
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (username === '' || password === '') {
       alert('Please fill in both fields.');
   } else {
       alert('Login successful!');
       window.location.href = 'themes.html'; // Redireciona para a página de temas
   }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
   event.preventDefault();
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (username === '' || password === '') {
       alert('Please fill in both fields.');
   } else {
       alert('Registration successful!');
       window.location.href = 'themes.html'; // Redireciona para a página de temas após o cadastro
   }
});

document.addEventListener("DOMContentLoaded", () => {
    const botoesComprar = document.querySelectorAll(".produto button");
  
    botoesComprar.forEach(botao => {
      botao.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho!");
      });
    });
  });
  