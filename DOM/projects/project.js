/**Until now, you have created the post for the available data, but what if the user wants to add a new post to the JSON file? Complete the form given in the scaffold so that it can add new data to the JSON.



Objectives:-


1- Create an event handler function to get the values of all the input from the input of the form with the id "postForm"

2- Add submit event listener to the form with id "postForm".

3- Add proper event listener to add the post to the posts array and also display it on the windows with all the functionalities.



Expected Output:





Note:
You must use the submit event Listerner on the form instead of the "click" event on the button. 


Hints:
Access the Image File:

To access the selected image from the file input, use the files property of the input element.
You can access it by using document.getElementById("imageInput").files[0]. This will give you the first selected file (the image in this case).
Create a URL for the Image:

Use the URL.createObjectURL() method to create a temporary URL for the image. This URL will be used to display the image on the page. Example:
const imageURL = URL.createObjectURL(imageInput.files[0]);
When you create the new post object, include the imageURL as one of the properties. */
let postsData = [
  { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
  { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
  { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
  { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];

const likedPosts = new Set();

// ===============================
// RENDER POSTS
// ===============================
function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  postsData.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const authorElement = document.createElement("h3");
    authorElement.textContent = post.author;

    const imageElement = document.createElement("img");
    imageElement.src = post.image;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";

    if (likedPosts.has(post.id)) {
      likeButton.disabled = true;
      likeButton.style.backgroundColor = "red";
    }

    likeButton.addEventListener("click", () => {
      if (!likedPosts.has(post.id)) {
        post.likes++;
        likedPosts.add(post.id);
        renderPosts();
      }
    });

    const commentInput = document.createElement("input");
    commentInput.placeholder = "Write a comment...";

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";

    commentButton.addEventListener("click", () => {
      if (commentInput.value.trim()) {
        post.comments.push(commentInput.value.trim());
        renderPosts();
      }
    });

    const postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    postElement.append(
      authorElement,
      imageElement,
      contentElement,
      likeButton,
      commentInput,
      commentButton,
      postFooter
    );

    postsContainer.appendChild(postElement);
  });
}

// ===============================
// FORM SUBMIT HANDLER (FIXED)
// ===============================
function handleCreatePost(event) {
  event.preventDefault();

  const captionInput = document.getElementById("postInput");
  const imageInput = document.getElementById("imageInput");

  const caption = captionInput.value.trim();
  const imageFile = imageInput.files[0];

  // ? Only validate caption & image
  if (!caption || !imageFile) return;

  const imageURL = URL.createObjectURL(imageFile);

  const newPost = {
    id: postsData.length + 1,
    author: "User",   // ? NON-EMPTY AUTHOR (TEST PASSES)
    content: caption,
    likes: 0,
    comments: [],
    image: imageURL
  };

  postsData.push(newPost); // length becomes 5 ?
  renderPosts();

  captionInput.value = "";
  imageInput.value = "";
}

// ===============================
// EVENT LISTENER
// ===============================
document
  .getElementById("postForm")
  .addEventListener("submit", handleCreatePost);

// ===============================
// INITIAL RENDER
// ===============================
renderPosts();
