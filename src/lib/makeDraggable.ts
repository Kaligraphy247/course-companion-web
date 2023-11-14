/**
 * Function to make an element draggable i.e. change its position thereby making it float.
 * @param element HTMLElement - The element to make draggable
 */
export default function makeDraggable(element: HTMLElement) {
	// Log the element ID
	// console.log('Element: ', element.id); //! DEBUG

	// Variables to store mouse offset and dragging state
	let offsetX: number, offsetY: number;
	let isDragging = false;

	/**
	 * Function to constrain a value within a range
	 * @param value number - The value to constrain
	 * @param min number - The minimum value
	 * @param max number - The maximum value
	 * @returns number - The constrained value
	 */
	function constrain(value: number, min: number, max: number) {
		return Math.min(Math.max(value, min), max);
	}

	/**
	 * Function to get the saved position from local storage
	 */
	function getSavedPosition() {
		const savedPosition = localStorage.getItem(`${element.id}Position`);
		if (savedPosition) {
			const { x, y } = JSON.parse(savedPosition);
			element.style.left = `${x}px`;
			element.style.top = `${y}px`;
		}
	}

	/**
	 * Function to save the position to local storage
	 */
	function savePosition() {
		const x = parseInt(element.style.left, 10) || 0;
		const y = parseInt(element.style.top, 10) || 0;
		localStorage.setItem(`${element.id}Position`, JSON.stringify({ x, y }));
	}

	// Event listener for mouse down
	element.addEventListener('mousedown', (e: MouseEvent) => {
		isDragging = true;

		// Save the initial mouse position
		offsetX = e.clientX - element.getBoundingClientRect().left;
		offsetY = e.clientY - element.getBoundingClientRect().top;

		// Set cursor style
		element.style.cursor = 'grabbing';

		// Prevent default behavior to avoid selecting text
		e.preventDefault();
	});

	// Event listener for mouse move
	document.addEventListener('mousemove', (e: MouseEvent) => {
		if (isDragging) {
			// Calculate new position based on the mouse movement
			const x = e.clientX - offsetX;
			const y = e.clientY - offsetY;

			// Constrain position within the boundaries of the viewport
			const constrainedX = constrain(x, 0, window.innerWidth - element.clientWidth);
			const constrainedY = constrain(y, 0, window.innerHeight - element.clientHeight);

			// Update the element's position
			element.style.left = `${constrainedX}px`;
			element.style.top = `${constrainedY}px`;
		}
	});

	// Event listener for mouse up
	document.addEventListener('mouseup', (event: MouseEvent) => {
		if (isDragging) {
			isDragging = false;

			// Reset cursor style
			element.style.cursor = 'grab';

			// Save the position to local storage
			savePosition();

			// Additional logic for when dragging stops can be added here

			// Prevent default behavior
			event.preventDefault();
		}
	});

	// Get the saved position when the page loads or element is mounted
	getSavedPosition();
}
