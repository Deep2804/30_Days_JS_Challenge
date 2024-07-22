// Task 1: Add a click event listener to a button that changes the text content of the paragraph.
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = 'Text has been changed!';
});

// Task 2: Add a double click event listener to an image that toggles its visibility.
document.getElementById('toggleImg').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgreen';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('hoverDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
});

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('inputField').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in the paragraph.
document.getElementById('inputField').addEventListener('keyup', function() {
    document.getElementById('displayParagraph').textContent = this.value;
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in the paragraph.
document.getElementById('mySelect').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = `Selected: ${this.value}`;
});

// Task 9: Add a click event listener to a list that logs the text content of the clicked item using event delegation.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('parentDiv').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('child')) {
        console.log(`Dynamically added child clicked: ${event.target.textContent}`);
    }
});

document.getElementById('addChildBtn').addEventListener('click', function() {
    const newChild = document.createElement('div');
    newChild.classList.add('child');
    newChild.textContent = 'New Child';
    document.getElementById('parentDiv').appendChild(newChild);
});
