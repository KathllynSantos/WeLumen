function mostrarDepoimento(cliente) {
    // Remover a classe "selecionado" de todos os clientes
    const clientes = document.querySelectorAll('.cliente');
    clientes.forEach(cliente => cliente.classList.remove('selecionado'));

    // Adicionar a classe "selecionado" ao cliente clicado
    const clienteSelecionado = document.querySelector(`.cliente[onclick="mostrarDepoimento('${cliente}')"]`);
    clienteSelecionado.classList.add('selecionado');

    // Mostrar o depoimento correspondente
    const depoimentos = {
        cliente1: {
            nome: 'Naturalle',
            foto: 'img/cliente1.jpeg',
            texto: 'A We Lumen transformou nossa presença online, superando nossas expectativas! A equipe foi super atenciosa e criativa em todos os processos!'
        },
        cliente2: {
            nome: 'Bella Modas',
            foto: 'img/cliente1.jpeg',
            texto: 'Trabalhar com a We Lumen foi uma experiência incrível. Eles ajudaram a transformar nossa visão em realidade com soluções criativas e rápidas.'
        },
        cliente3: {
            nome: 'Evelyn',
            foto: 'img/cliente1.jpeg',
            texto: 'A We Lumen fez um trabalho maravilhoso para a nossa marca. Agora temos uma presença online forte e engajante, e os resultados falam por si mesmos!'
        }
    };

    const depoimentoBox = document.querySelector('.depoimento-box');
    depoimentoBox.querySelector('.foto-cliente-box').src = depoimentos[cliente].foto;
    depoimentoBox.querySelector('.nome-cliente-box').textContent = depoimentos[cliente].nome;
    depoimentoBox.querySelector('.texto-depoimento').textContent = depoimentos[cliente].texto;
}
