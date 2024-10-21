var posts=["posts/8516f8fb.html","posts/34bcaab5.html","posts/484d2139.html","posts/2662976e.html","posts/37ad8430.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };