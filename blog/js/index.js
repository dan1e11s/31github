let inp = document.querySelector('input');
let btn = document.querySelector('button');

let list = document.querySelector('.list');

let db = [
  {
    text: 'Привет!',
  },
];

function render() {
  list.innerHTML = '';
  for (let i of db) {
    list.innerHTML += `
            <div class="list-item">
                <p>
                    ${i.text}
                </p>
            </div>
        `;
  }
}

render();

function add() {
  if (inp.value.trim().length === 0) {
    alert('Введите текст!');
    return;
  }

  let newPost = {
    text: inp.value,
  };

  db.push(newPost);
  inp.value = '';

  render();
}

btn.addEventListener('click', add);
