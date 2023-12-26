const article = {
  info: {
    title: "My title",
    description: "This is info about article",
  },
  id: 67890,
  categoryId: 4567,
  likeamount: 443,
};

const ARTICLE_FIELD = {
  title: "ID статті",
  description: "Заголовок статті",
};

articlePhoto = {
  photoUrl: "...url",
  photoId: 100,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4553, user: "Ivan", message: "Крутий контент" }],
};

Object.assign(article, articlePhoto, articleCommentList);
// console.log(article);

// console.log(Object.entries(article.info));

const fromList = Object.entries(article.info);

const fromListLayout = fromList.map(([key, value]) => {
  return `<p> <strong> ${ARTICLE_FIELD[key]} </strong> <br> <span> ${value} </span> <p>`;
  //   return `${ARTICLE_FIELD[key]} : ${value}`;
  //   return [ARTICLE_FIELD[key], value];
});

// console.log(fromListLayout);

const objArr = [
  ["id", 10234],
  ["title", "my product name"],
  ["price", 1234],
];

// console.log(Object.fromEntries(objArr));

// console.log(article.propertyIsEnumerable("id"));

// Object.freeze(article);

// Object.preventExtensions(article);

Object.seal(article);

delete article.id; // article.id = "12345678";

console.log(article.id);

// console.log(Object.isExtensible(article));

// console.log(Object.keys(article));

console.log(Object.isSealed(article));

console.log(Object.values(article));

// article.title = "hello";

// console.log(article.hasOwnProperty("title"));

// console.log(article);

// console.log(Object.isFrozen(article));
