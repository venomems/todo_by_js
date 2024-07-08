const createInput = document.getElementById('create__input');
const createButton = document.getElementById('create__button');
const list = document.getElementById('nodes');

function getNote(input){
	return `
			<li class="app__item">
				<span class="app__item-title">${input.value}</span>
				<div class="app__buttons">
					<button class="app__item-btn">✔</button>
					<button class="app__item-btn">✖</button>
				</div>
			</li>
		`
}

createButton.onclick = function() {
	if (createInput.value.length === 0) {
		return
	}

	list.insertAdjacentHTML('beforeend', getNote(createInput));
}

