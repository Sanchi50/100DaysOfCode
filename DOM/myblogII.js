/**For the Blog Page, we built in the previous topic and modified it to add move up, move down, and delete functionality using an event listener.



The initial blog structure and styling are already provided. Your task is to use JavaScript to add buttons and implement their functionality using event listeners.



Objective:


Create Button Container:
Create a new div element with the class blog-buttons.
Add Buttons:
Create a button element with the classes blog-button and move-up. Set its text to "Move Up" and append it to the blog-buttons div.
Create a button element with the classes blog-button and move-down. Set its text to "Move Down" and append it to the blog-buttons div.
Create a button element with the classes blog-button and delete. Set its text to "Delete" and append it to the blog-buttons div.
Append Button Container:
Append the blog-buttons div to the newBox element, which represents a single blog post container.
Add Event Listeners:
Attach a click event listener to the "Move Up" button:
On clicking, the blog post should move one position up in the list.
Attach a click event listener to the "Move Down" button:
On clicking, the blog post should move one position down in the list.
Attach a click event listener to the "Delete" button:
On clicking, the blog post should be removed from the list entirely.


Expected Output:

The dom structure of the project is as shown in the figure:


Hint:
Move Up: Check if the current blog post has a previous sibling. If it does, move it before its previous sibling.
Move Down: Check if the current blog post has a next sibling. If it does, move it after its next sibling.
To move a blog post up or down, use the previousElementSibling and nextElementSibling properties of the newBox element. Use insertBefore to re-arrange elements.
To delete a blog post, use the remove() method on the newBox element.
 */
// Create a new div to hold all the buttons
//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
  const blogList = document.querySelector('.blog-list');

  const newBox = document.createElement('div');
  newBox.classList.add('blog-box');

  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  newBox.appendChild(newBlogPost);

  const newBlogHeader = document.createElement('div');
  newBlogHeader.classList.add('blog-header');
  newBlogPost.appendChild(newBlogHeader);

  const newBlogTitle = document.createElement('h2');
  newBlogTitle.classList.add('blog-title');
  newBlogTitle.textContent = blog.title;
  newBlogHeader.appendChild(newBlogTitle);

  const newBlogDate = document.createElement('p');
  newBlogDate.classList.add('blog-date');
  newBlogDate.textContent = blog.date;
  newBlogHeader.appendChild(newBlogDate);

  const newBlogContent = document.createElement('p');
  newBlogContent.classList.add('blog-content');
  newBlogContent.textContent = blog.content;
  newBlogPost.appendChild(newBlogContent);

  // ---------------- BUTTON CONTAINER ----------------
  // Create a new div for buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("blog-buttons");

  // Append button container to newBox
  newBox.appendChild(buttonContainer);

  // ---------------- MOVE UP BUTTON ----------------
  const moveUpBtn = document.createElement("button");
  moveUpBtn.classList.add("blog-button", "move-up");
  moveUpBtn.textContent = "Move Up";
  buttonContainer.appendChild(moveUpBtn);

  // Event listener for Move Up
  moveUpBtn.addEventListener("click", function () {
    const prev = newBox.previousElementSibling; // previous blog
    if (prev) {
      newBox.parentNode.insertBefore(newBox, prev);
    }
  });

  // ---------------- MOVE DOWN BUTTON ----------------
  const moveDownBtn = document.createElement("button");
  moveDownBtn.classList.add("blog-button", "move-down");
  moveDownBtn.textContent = "Move Down";
  buttonContainer.appendChild(moveDownBtn);

  // Event listener for Move Down
  moveDownBtn.addEventListener("click", function () {
    const next = newBox.nextElementSibling; // next blog
    if (next) {
      newBox.parentNode.insertBefore(next, newBox);
    }
  });

  // ---------------- DELETE BUTTON ----------------
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("blog-button", "delete");
  deleteBtn.textContent = "Delete";
  buttonContainer.appendChild(deleteBtn);

  // Event listener for Delete
  deleteBtn.addEventListener("click", function () {
    newBox.remove(); // remove this blog completely
  });

  // Finally add the blog box to the list
  blogList.appendChild(newBox);
}
