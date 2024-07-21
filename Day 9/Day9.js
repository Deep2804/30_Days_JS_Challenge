// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.

document.getElementById("id1").innerText = "Hello, Good Morning by id selector"

// Task 2: Select an HTML element by its class and change its background color.

document.getElementsByClassName("hello")[0].style.backgroundColor = "pink"

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
let newElement = document.createElement('div')
newElement.innerText = "Hello, this is new element"
document.body.append(newElement)

// Task 4: Create a new li element and add it to an existing ul list.
let newLi = document.createElement('li')
newLi.innerText = "Shakes"
let ulElement = document.querySelector('ul')
ulElement.append(newLi)


// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let eleRemove = document.getElementById('rem')
eleRemove.remove()

// Task 6: Remove the last child of a specific HTML element.
document.getElementById("id2").removeChild(document.getElementById("id2").lastElementChild)



// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and one of its attributes(e.g., src of an img tag).
document.getElementsByTagName('img')[0].setAttribute('src', 
    'https://images.rawpixel.com/image_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8zNl9waG90b19vZl9idXR0ZXJmbHlfYmVzaWRlX2FfZmxvd2VyX25hdHVyZV9waF9iNjdhMzA4OS1jYTFkLTQzOWUtOGI1Yy0zYzQyZGFjODZlZjJfMS5qcGc.jpg')

// Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById('id1').setAttribute('class', 'css-class')
document.getElementById('id1').removeAttribute('class')


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let change_text = document.getElementById('change')
change_text.addEventListener('click', () => {
    document.getElementsByTagName('p')[0].innerText = "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer."
})


// Task 10: Add a mousehover event listener to an element that changes its border color.
document.getElementsByTagName('img')[0].addEventListener('mouseover', () => {
    document.getElementsByTagName('img')[0].style.borderColor = "black"
})
