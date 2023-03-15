class ButtonCount extends HTMLElement {
	constructor(){
		super();

		this.attachShadow({ mode: "open" });

		const button = document.createElement("button");
		let count = 0;
		button.innerHTML = `Times Clicked: ${count}`;

		this.shadowRoot.appendChild(button);

		button.addEventListener("click", () => {
			count++;
			button.innerHTML = `Times Clicked: ${count}`;
		});
	}
}

customElements.define("button-count", ButtonCount);