const faker = require("faker");

const seedPosts = () => {
  const blogData = [
    [
      {
        author: "Dani",
        posts: [
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          }
        ]
      }
    ],
    [
      {
        author: "John",
        posts: [
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          }
        ]
      }
    ],
    [
      {
        author: "Sam",
        posts: [
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          },
          {
            title: faker.lorem.word(),
            content: faker.lorem.paragraphs()
          }
        ]
      }
    ]
  ];

  console.log(blogData);
};

seedPosts();

module.exports = seedPosts;
