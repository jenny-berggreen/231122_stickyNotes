const userNote = document.querySelector('textarea');
const submitButton = document.querySelector('.add-sticker-button');
const notesContainer = document.querySelector('.notes-container');
const errorMessage = document.querySelector('.error-message');

const colors = ['azure', 'burlywood', 'coral', 'pink', 'lavender', 'lightblue', 'indianred', 'peru', 'gold', 'yellow'];

userNote.addEventListener('input', () => {
	errorMessage.style.display = 'none';
	if (userNote.textLength >= 200) {
		errorMessage.textContent = "Max length exceeded";
		errorMessage.style.display = 'block';
		return
	}
})

const handleNotes = () => {
	if (userNote.value.trim() === '') {
		errorMessage.textContent = "Please enter a note";
		errorMessage.style.display = 'block';
		return;
	} 
	else {
		const randomColor = Math.floor(Math.random() * (9.9 - 0) + 0);
		const randomRotation = Math.floor(Math.random() * (10.9 - -10) + -10);

		const stickyDiv = document.createElement('div');
		notesContainer.appendChild(stickyDiv);
		stickyDiv.textContent = userNote.value;
		stickyDiv.classList.add('sticky-div');
		stickyDiv.style.backgroundColor = colors[randomColor];
		stickyDiv.style.transform = `rotate(${randomRotation}deg)`;

		userNote.value = '';
	}
}

submitButton.addEventListener('click', handleNotes);