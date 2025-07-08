
  const projetos = document.querySelectorAll('.projeto');
  const btnLeft = document.querySelector('.left');
  const btnRight = document.querySelector('.right');
  let indexAtual = 0;

  function mostrarProjeto(index) {
    projetos.forEach((projeto, i) => {
      projeto.classList.remove('ativo');
      if (i === index) {
        projeto.classList.add('ativo');
      }
    });
  }

  btnRight.addEventListener('click', () => {
    indexAtual = (indexAtual + 1) % projetos.length;
    mostrarProjeto(indexAtual);
  });

  btnLeft.addEventListener('click', () => {
    indexAtual = (indexAtual - 1 + projetos.length) % projetos.length;
    mostrarProjeto(indexAtual);
  });

  // Mostrar o primeiro projeto ao carregar
  mostrarProjeto(indexAtual);
