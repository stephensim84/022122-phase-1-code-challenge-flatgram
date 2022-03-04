const flatGram = "http://localhost:3000/images";
const flatGramComments = "http://localhost:3000/comments";

fetch(flatGram)
.then((res) => res.json())
.then(renderDogImage)
.catch(console.err);

fetch(flatGramComments)
.then((res) => res.json())

function flatGramComments(){


function renderDogImage(dogSi){
dogSi.forEach(dogSiImageToPage);
}

function dogSiImageToPage(dog){
const dogImage = document.createElement("img")
dogImage.src = dog.dogImage;

const dogComments = document.createElement(comments-list)
dogComments.textContent = "comments"

const dogLikes = document.crteateElement(like-button)
dogLikes.textcontent ="♥"

const likesNum = document.createElement(like-count)
likesNum.textContent = dog.likes 


image-card.append(dogImage, dogComments, dogLikes, )
}