const container = document.querySelector('.comment');


const renderPosts = async (term) => {
  console.log(term);
  let uri = 'http://localhost:3000/commentusers';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts  = await res.json();
  console.log(commenttext);

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        

            <p>${post.commenttext}</P>
        <a href="../blogspothtml/details.html?id=${post.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());