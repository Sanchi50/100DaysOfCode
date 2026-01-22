/**In the previous topic, you have successfully constructed a social media page featuring 'like' and 'comment' buttons. However, these buttons are currently non-functional.



Objectives:


Like Button:

1. Add a click event listener to the like button.
2. Increment the "likes" property of the "post1" object when the button is clicked.
3. The like button should only be clickable once.
4. On click of the like button, the background color of the like button with the class "like-button" should be changed to red.
Comment Button:

1. Add a click event listener to the comment button.
2. After each click, the comment should be added to the "comments" array of "post1".
3. Display the comment in the "comment-container" div below the post accordingly.
Update Footer:

1. After clicking both buttons, update the footer section that contains the likes and comments count.
2. Display the updated number of likes and comments in the footer.


Expected Output:




Hints:
1. Achieving "Like Functionality :

Using a Set : This approach uses a Set to track liked posts. A Set is a collection of unique values, making it perfect for tracking whether a specific post has been liked. Each post ID can be stored in the Set, and you can check if the post is already in the set before allowing the like action. For example:
const likedPosts = new Set();
Using a Boolean Property in the Object : In this approach, a boolean property (e.g., isLiked) is added directly to the post object to track whether the post has been liked. This avoids using external data structures and directly modifies the post object.
Using a Global Variable (External Tracking): This approach uses a global variable (or a separate external variable) to track the state of whether a post has been liked. It allows you to store this state outside the post object, providing flexibility and separation of concerns. For example:
let isLiked = false;
2. Achieving Comment Functionality :

Using the Post's Comments Array: In this approach, you directly modify the comments array of the post object (post1). Each new comment entered by the user is pushed into this array, and the DOM is updated to reflect the new comment.
3. Writing Logic for "like" or "comment" action:

You can write the logic for handling the "like" or "comment" action directly inside the event listener. This approach eliminates the need for extra functions and keeps everything in one place.
For better organization, you can write the function logic (like incrementing likes or adding comments) outside the event listener and call these functions inside the event listener. This approach makes the code more modular, reusable, and easier to maintain.
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <div class="container">
      <div class="posts-container">
        <h1>Photogram</h1>
        <div id="posts"></div>
      </div>
    </div>

.container {
  max-width: 550px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  color: white;
  
  background-color: #272727;
}
body{

//Create the event Listener for the buttons.
let post1 =
{ id: 1, author: 'John', content: 'My first Post!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' };

function renderPosts() {
const postsContainer = document.getElementById('posts');
postsContainer.innerHTML = '';


  const postElement = document.createElement('div');

 */
// Create the event Listener for the buttons.
let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg',
  isLiked: false // to make sure like is clicked only once
};

function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  const postElement = document.createElement('div');
  postElement.className = 'post';

  const author = document.createElement('h3');
  author.textContent = post1.author;

  const image = document.createElement('img');
  image.src = post1.image;
  image.alt = 'Post Image';

  const content = document.createElement('p');
  content.textContent = post1.content;

  const likeBtn = document.createElement('button');
  likeBtn.textContent = 'Like';
  likeBtn.className = 'like-button';

  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Write a comment...';

  const commentBtn = document.createElement('button');
  commentBtn.textContent = 'Comment';

  const footer = document.createElement('div');
  footer.className = 'post-footer';
  footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';
  commentsContainer.style.display = 'none';

  post1.comments.forEach((comment) => {
    const p = document.createElement('p');
    p.textContent = comment;
    commentsContainer.appendChild(p);
  });

  // LIKE FUNCTIONALITY
  likeBtn.addEventListener('click', () => {
    if (!post1.isLiked) {
      post1.likes++;
      post1.isLiked = true;
      likeBtn.style.backgroundColor = 'red';
      footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
    }
  });

  // COMMENT FUNCTIONALITY
  commentBtn.addEventListener('click', () => {
    const newComment = commentInput.value.trim();
    if (newComment !== '') {
      post1.comments.push(newComment);

      const p = document.createElement('p');
      p.textContent = newComment;
      commentsContainer.appendChild(p);

      commentInput.value = '';
      footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
    }
  });

  // TOGGLE COMMENTS
  footer.addEventListener('click', () => {
    if (commentsContainer.style.display === 'none') {
      commentsContainer.style.display = 'block';
    } else {
      commentsContainer.style.display = 'none';
    }
  });

  postElement.appendChild(author);
  postElement.appendChild(image);
  postElement.appendChild(content);
  postElement.appendChild(likeBtn);
  postElement.appendChild(commentInput);
  postElement.appendChild(commentBtn);
  postElement.appendChild(footer);
  postElement.appendChild(commentsContainer);

  postsContainer.appendChild(postElement);
}

renderPosts();
