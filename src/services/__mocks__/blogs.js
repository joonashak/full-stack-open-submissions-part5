const blogs = [
  {
    title: 'otsikko',
    author: 'kirjoittaja',
    _id: 'asd',
    url: 'www',
    likes: 4,
    user: {
      _id: 'qwe',
      username: 'kayttaja',
      name: 'nimi',
    },
  },
];

const getAll = () => {
  return Promise.resolve(blogs);
};

export default { getAll, blogs };
