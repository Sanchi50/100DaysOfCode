const blogData = [
  {
    title: 'First Blog Post',
    date: 'January 1, 2022',
    content: 'this is content of the first blog page.'
  },
  {
    title: 'Second Blog Post',
    date: 'February 1, 2022',
    content: 'This is the content of the second blog post.'
  },
  {
    title: 'Third Blog Post',
    date: 'March 1, 2022',
    content: 'This is the content of the third blog post.'
  }
];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog) {
  // select the ul with class blog-list
  const blogList = document.querySelector(".blog-list");

  // create main container
  const blogPostDiv = document.createElement("div");
  blogPostDiv.classList.add("blog-post");

  // create header div
  const blogHeaderDiv = document.createElement("div");
  blogHeaderDiv.classList.add("blog-header");

  // create title
  const titleEl = document.createElement("h2");
  titleEl.classList.add("blog-title");
  titleEl.textContent = blog.title;

  // create date
  const dateEl = document.createElement("p");
  dateEl.classList.add("blog-date");
  dateEl.textContent = blog.date;

  // create content
  const contentEl = document.createElement("p");
  contentEl.classList.add("blog-content");
  contentEl.textContent = blog.content;

  // append title and date to header
  blogHeaderDiv.appendChild(titleEl);
  blogHeaderDiv.appendChild(dateEl);

  // append header and content to main div
  blogPostDiv.appendChild(blogHeaderDiv);
  blogPostDiv.appendChild(contentEl);

  // append everything to the ul
  blogList.appendChild(blogPostDiv);
}

//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh

//calling the function
blogData.forEach(blog => addBlog(blog));