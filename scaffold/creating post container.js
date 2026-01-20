/**For the given markup and CSS, build a Social Media Page that would be able to utilize the post1 object present in the JS scaffold to build a container that would display the post on the Screen.



Objectives:
In the div with the id "posts" create a new div with the class "post" with the following elements in the specified sequence:

Author Name:
Create an h3 element to display the author's name (post1.author).
Post Image:
Create an img element to display the image (post1.image).
Set the alt attribute to "Post Image".
Post Content:
Create a p element to display the content (post1.content).
Like Button:
Create a button element with the text Like.
Comment Input:
Create an input element of type text with a placeholder "Write a comment...".
Comment Button:
Create a button element with the text Comment.
Post Footer:
Create a div with the class post-footer to display the number of likes and comments using the template literal: Likes: ${post1.likes} Comments: ${post1.comments.length}
Comments Container:
Create a div with the class comments-container. Initially, set its display property to none.
For each comment in post1.comments, create a p element with the comment text and append it to this container.
Use a loop to iterate through the comments array and dynamically create a p element for each comment
Toggle Comments Visibility:
Add a click event listener to the post-footer div. When clicked:
If the comments container is hidden (display: none), show it (display: block).
If the comments container is visible (display: block), hide it (display: none).
Append Elements:
Append all the above elements in the specified order to a div with the class post.
Finally, append this post div to the div with the ID posts.





 */
// Define the post1 object with the given details.
let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg'
};

// Function to render the post1 object on the screen.
function renderPosts() {
  // Get the container where the post will be added.
  const postsContainer = document.getElementById("posts");

  // Clear any existing content in the posts container.
  postsContainer.innerHTML = "";

  // Create a new div element for the post and set its class.
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  // Create an h3 element for the author's name and set its text content.
  const author = document.createElement("h3");
  author.textContent = post1.author;

  // Create an img element for the post's image and set its source and alt text.
  const image = document.createElement("img");
  image.src = post1.image;
  image.alt = "Post Image";

  // Create a p element for the post's content and set its text content.
  const content = document.createElement("p");
  content.textContent = post1.content;

  // Create a button element for "Like" and set its text content.
  const likeBtn = document.createElement("button");
  likeBtn.textContent = "Like";

  // Create an input element for writing comments and set its type and placeholder.
  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  // Create a button element for "Comment" and set its text content.
  const commentBtn = document.createElement("button");
  commentBtn.textContent = "Comment";

  // Create a div element for the post footer and set its class and text content.
  const footer = document.createElement("div");
  footer.className = "post-footer";
  footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

  // Create a div element for the comments container and set its class.
  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";

  // Initially, set its display style to 'none' to hide it.
  commentsContainer.style.display = "none";

  // For each comment in the comments array, create a p element and append it to the comments container.
  post1.comments.forEach((comment) => {
    const p = document.createElement("p");
    p.textContent = comment;
    commentsContainer.appendChild(p);
  });

  // Append all created elements to the post container.
  postDiv.appendChild(author);
  postDiv.appendChild(image);
  postDiv.appendChild(content);
  postDiv.appendChild(likeBtn);
  postDiv.appendChild(commentInput);
  postDiv.appendChild(commentBtn);
  postDiv.appendChild(footer);
  postDiv.appendChild(commentsContainer);

  // Add a click event listener to toggle the visibility of commentsContainer.
  footer.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
    } else {
      commentsContainer.style.display = "none";
    }
  });

  // Append the post element to the posts container.
  postsContainer.appendChild(postDiv);
}

// Call the renderPosts function to display the post on the screen.
renderPosts();
