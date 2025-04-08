var posts=["posts/e8ec6fce.html","posts/71211513.html","posts/34bcaab5.html","posts/107c5971.html","posts/1b23d127.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };