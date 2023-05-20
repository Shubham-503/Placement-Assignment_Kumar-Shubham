console.log("js loaded");
let blogData;

// IIFE to fetch data from API
(function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      blogData = data;
      let blogs = document.getElementsByClassName("blogs")[0];
      let str = "";
      data.map((blog) => {
        str += `<article class="blog">
    <div class="blog__info">
      <h3 class="blog__title">${blog.title}</h3>
      <p class="blog__body">
       ${blog.body}
      </p>
    </div>
    <button class="del__blog" onclick=deleteBlog(${blog.id}) >Delete</button>
  </article>`;
      });
      // console.log(str);
      blogs.innerHTML = str;
    });
})();

function deleteBlog(id) {
  let filteredBlog = blogData.filter((blog, idx) => {
    if (blog.id !== id) return true;
    else return false;
  });
  console.log(filteredBlog);
  let blogs = document.getElementsByClassName("blogs")[0];
  let str = "";
  filteredBlog.map((blog) => {
    str += `<article class="blog">
    <div class="blog__info">
      <h3 class="blog__title">${blog.title}</h3>
      <p class="blog__body">
       ${blog.body}
      </p>
    </div>
    <button class="del__blog" onclick=deleteBlog(${blog.id}) >Delete</button>
  </article>`;
  });
  blogs.innerHTML = str;
  blogData = filteredBlog;
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function createBlog() {
  let title = document.getElementsByClassName("newBlog__title")[0].value;
  let body = document.getElementsByClassName("newBlog__body")[0].value;
  if (!title || !body) {
    document.getElementsByClassName("add")[0].style.disabled = true;
  }
  blogData.unshift({ title, body });

  let str = "";
  blogData.map((blog) => {
    str += `<article class="blog">
<div class="blog__info">
  <h3 class="blog__title">${blog.title}</h3>
  <p class="blog__body">
   ${blog.body}
  </p>
</div>
<button class="del__blog" onclick=deleteBlog(${blog.id}) >Delete</button>
</article>`;
  });
  let blogs = document.getElementsByClassName("blogs")[0];
  blogs.innerHTML = str;
  closeModal();
  document.getElementsByClassName("newBlog__title")[0].value = "";
  document.getElementsByClassName("newBlog__body")[0].value;
}
