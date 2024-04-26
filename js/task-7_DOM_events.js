const heading = document.createElement("h1");
heading.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading);

const image = document.createElement("img");
image.classList.add("title-img");
image.src = "https://e2k9ube.cloudimg.io/v7/https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/2/full_42489.jpg?width=856&height=482&func=crop"
image.alt = "Nature";
console.log(image);

const box = document.createElement("div");
box.classList = "box-title";
console.log(box);

document.body.append(heading,image,box);