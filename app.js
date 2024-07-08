const inputElement = document.getElementById('create__input');
const createButton = document.getElementById('create__button');
const listElement = document.getElementById('nodes');

const notes = [
	{
		title: 'дописать тудушку',
		completed: false,
	},
	{
		title: 'смотреть реакт',
		completed: false,
	},
];

function render() {
	listElement.innerHTML = '';
	for(let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNote(notes[i], i));
	}
}

render();

createButton.onclick = function() {
	if (inputElement.value.length === 0) {
		return
	}

	const newNote = {
		title: inputElement.value,
		completed: false,
	}

	notes.push(newNote);
	render();
	inputElement.value = '';
}

listElement.onclick = function(event) {
	if (event.target.dataset.index) {
		const index = Number(event.target.dataset.index);
		const type = event.target.dataset.type;

		if (type === 'toggle'){
			notes[index].completed = !notes[index].completed;
		} else if (type === 'remove'){
			notes.splice(index, 1);
		}

		render();
	}
}

function getNote(note, index){
	return `
			<li class="app__item">
				<span class="app__item-title ${note.completed ? 'close' : ''}">${note.title}</span>
				<div class="app__buttons">
					<button class="app__item-btn" data-index="${index}" data-type="toggle">✔</button>
					<button class="app__item-btn" data-index="${index}" data-type="remove">✖</button>
				</div>
			</li>
		`
}