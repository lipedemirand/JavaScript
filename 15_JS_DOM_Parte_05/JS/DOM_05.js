let form = document.getElementById('addForm');
let iitemList = document.getElementById('items');
let filter = document.getElementById('filter');
// Adiciona item
function addItem(e) {
    e.preventDefault();

    // Pega o valor do <input>
    let newItem = document.getElementById('item').value;

    // Cria novo elemento <li>
    let li = document.createElement('li');
    // Adiciona classe
    li.className = 'list-group-item';
    // Adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));

    // Cria o elemento botão paara deletar um item
    let deleteBtn = document.createElement('button');

    // adiciona classes para o botão de deletar
    deleteBtn.ClassName = 'btn btn-danger btn- float-end delete';

    // Acrescenta o texto no novo elemento
    deleteBtn.appendChild(document.createTextNode('x'));
    
    // Acrescenta o botão no elemento li
    li.appendChild(deleteBtn);

    iitemList.appendChild(li); // Adiciona o novo item na lista 

    form.reset(); // Limpa o formulário
}