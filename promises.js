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
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error something went wrong ");
      }
    }, 2000);
  });
};

// createPost({ title: "Post four", body: "This is post four" })
//   .then(getPost)
//   .catch(error => {
//     console.log(error);
//   });

// Promise.all
const promise1 = Promise.resolve("Hello world ");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good bye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(value =>
  console.log(value)
);
