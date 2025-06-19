function mostrarDepoimento(cliente) {
    const clientes = document.querySelectorAll('.cliente');
    clientes.forEach(c => c.classList.remove('selecionado'));

    const clienteSelecionado = document.querySelector(`.cliente[onclick*="${cliente}"]`);
    clienteSelecionado.classList.add('selecionado');

    const depoimentos = {
        cliente1: {
            nome: 'Jessica Mesquita',
            foto: 'img/Jessica.png',
            texto: 'Sem palavras para a experiência de trabalhar com a Lúmen. Uma equipe incrível, atentas aos detalhes, muito criativas e que atendeu minhas expectativas. Indico de olhos fechados.'
        },
        cliente2: {
            nome: 'Beatriz - BKS Personalizados',
            foto: 'img/Beatri.png',
            texto: 'Gente do céu, vocês arrasam de mais, amo o trabalho de vocês. Não canso de indicar o trabalho de vocês.'
        },
        cliente3: {
            nome: 'Fanny - Bella Modas',
            foto: 'img/Bella Modas.png',
            texto: 'Quero agradecer pelo excelente trabalho na gestão das redes sociais. A dedicação e criatividade de vocês têm feito toda a diferença. Estou muito satisfeita com os resultados e animada para continuar essa parceria!'
        }
    };

    const depoimentoBox = document.querySelector('.depoimento-box');
    depoimentoBox.querySelector('.foto-cliente-box').src = depoimentos[cliente].foto;
    depoimentoBox.querySelector('.nome-cliente-box').textContent = depoimentos[cliente].nome;
    depoimentoBox.querySelector('.texto-depoimento').textContent = depoimentos[cliente].texto;
}
