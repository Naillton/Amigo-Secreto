//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// constantes criadas para especificar os elementos do DOM
// e manipular a lista de amigos.
const addBtn = document.getElementById('addBtn');
const input = document.getElementById('amigo');
const list = document.getElementById('listaAmigos');
// criando um item de lista para cada amigo
const li = document.createElement('li');
// recuperando o elemento com base na classe
const result = document.getElementsByClassName('result-list')[0];
// recuperando o botão de sortear amigo
const drawBtn = document.getElementsByClassName('drawBtn')[0];

// array para armazenar nome de amigos
let friends = [];

// funcao para adicionar amigos
let addFriends = () => {
    // inserindo o amigo na lista do DOM
    const li = document.createElement('li');
    // obetendo valor do input
    // caso ele não esteja vazio
    if (input.value.trim() !== '') {
        // adicionando o valor do input ao array de amigos
        friends.push(input.value.trim());
        // limpando o input
        input.value = '';

        friends.forEach(friend => {
        li.textContent = friend;
        // adicionando o item de lista à lista no DOM
        list.appendChild(li);
    });
    }
    else {
        // caso o input esteja vazio, exibe um alerta
        alert('Por favor, informe um nome válido.');
    }
}

// funcao para adicionar o evento de click ao botão
function adicionarAmigo() {
    // adicionando o evento de click ao botão
    addBtn.addEventListener('click', addFriends);
}

// funcao para sortear amigos
let sortearAmigo = () => {
    // verifica se há amigos na lista
    if (friends.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    // amigo vencedor é escolhido aleatoriamente
    const winnerFriend = Math.floor(Math.random() * friends.length)
    
    // exibe o resultado do sorteio
    let result = friends[winnerFriend] + ' foi sorteado(a) como amigo secreto(a)!';
    
    friends = []; // limpa a lista de amigos após o sorteio
    list.innerHTML = ''; // limpa a lista no DOM
    alert(result);

    // inserindo o vencedor na lista do DOM
    const li = document.createElement('li');

    li.textContent = result;
    result.appendChild(li);
}


// adicionando o evento de click ao botão de adicionar amigo
function drawFriend() {
    drawBtn.addEventListener('click', sortearAmigo);
}
