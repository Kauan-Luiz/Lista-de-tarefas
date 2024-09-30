let input = document.getElementById('input-tarefa')

let btnAdd = document.getElementById('btn-add')

let main = document.getElementById('areaLista')

function addTarefa(){

    let valorInput = input.value;

    if (valorInput !== "") {
        let novoItem = `<div class="item">
            <div class="item-icone">
                <span class="mdi mdi-circle-outline"></span>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete"> <i class="mdi mdi-delete">Deletar</i></button>
            </div>
        </div>`;

        main.innerHTML += novoItem;
    };
};

input.addEventListener("keyup", function(event) {
    if(event.keycode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})