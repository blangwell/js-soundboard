const sbContainer = document.querySelector('.sb-container');
const pageTitle = document.querySelector('#page-title');

const coinWav = {
	audio: new Audio('./assets/coin-3.wav'),
	label: 'Coin'
};
const collectWav = {
	audio: new Audio('./assets/collect-3.wav'),
	label: 'Collect'
};
const explodeWav = {
	audio: new Audio('./assets/explode-1.wav'),
	label: 'Explode'
};
const flashback = {
	audio: new Audio('./assets/flashback.wav'),
	label: 'Flashback'
};
const lose = {
	audio: new Audio('./assets/lose-9.wav'),
	label: 'Lose'
};
const win = {
	audio: new Audio('./assets/win-8.wav'),
	label: 'Win'
};

const soundBank = [coinWav, collectWav, explodeWav, flashback, lose, win];

document.addEventListener('DOMContentLoaded', () => {
	soundBank.map((sound, idx) => {
		let btn = document.createElement('button');
		btn.id = idx;
		btn.className = 'sb-button';
		btn.innerText = sound.label;
		sbContainer.appendChild(btn);
		btn.addEventListener('click', () => sound.audio.play());
	})
	pageTitle.addEventListener('click', () => {
		pageTitle.classList.toggle('clicked');
	});
});