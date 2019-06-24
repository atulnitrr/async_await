const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" }
];

const getPost = () => {
  setTimeout(() => {
    let output = "";

    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error something went wrong ");
      }
    }, 2000);
  });
};

createPost({ title: "Post four", body: "This is post four" })
  .then(getPost)
  .catch(error => {
    console.log(error);
  });
