const quiz = {
  title: 'Art: composers and artists',
  time: 120000,
  questions: [
    {
      id: 1,
      title: 'Who is the author of this picture?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      answers: [
        {
          text: 'Leonardo Da Vinci',
          isRight: true
        },
        {
          text: 'Michelangelo',
          isRight: false
        },
        {
          text: 'Edvard Moonk',
          isRight: false
        },
        {
          text: 'Rene Magritte',
          isRight: false
        },
      ],
    },
    {
      id: 2,
      title: 'Who is the author of this picture?',
      picture: 'https://2.bp.blogspot.com/_QEoO4GkMbBE/TC2z9DpKIvI/AAAAAAAACyw/gVLkXP5ZIfg/w1200-h630-p-k-no-nu/Edvard+Munch-%C3%87%C4%B1%C4%9Fl%C4%B1k.jpg',
      answers: [
        {
          text: 'Claude Monet',
          isRight: false
        },
        {
          text: 'Vincent Van Gogh',
          isRight: false
        },
        {
          text: 'Edvard Moonk',
          isRight: true
        },
        {
          text: 'Leonardo Da Vinci',
          isRight: false
        },
      ]
    },
    {
      id: 3,
      title: 'Who is the author of four-part masterpiece "The Four Seasons"?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vivaldi_La_Cave.jpg/267px-Vivaldi_La_Cave.jpg',
      answers: [
        {
          text: 'Wolfgang Amadeus Mozart',
          isRight: false
        },
        {
          text: 'Fridericus Franciscus Choppen',
          isRight: false
        },
        {
          text: 'Antonio Lucio Vivaldi',
          isRight: true
        },
        {
          text: 'Johann Sebastian Bach',
          isRight: false
        },
      ]
    },
    {
      id: 4,
      title: 'Who is the author of this picture?',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/61OcpnZwRpL.jpg',
      answers: [
        {
          text: 'Rene Magritte',
          isRight: false
        },
        {
          text: 'Claude Monet',
          isRight: false
        },
        {
          text: 'Vincent Van Gogh',
          isRight: true
        },
        {
          text: 'Picasso',
          isRight: false
        },
      ]
    },
    {
      id: 5,
      title: 'Who is the author of this picture?',
      picture: 'https://www.biographyonline.net/wp-content/uploads/2014/05/picasso-peace1.gif',
      answers: [
        {
          text: 'Rene Magritte',
          isRight: false
        },
        {
          text: 'Jan Vermeer',
          isRight: false
        },
        {
          text: 'Picasso',
          isRight: true
        },
        {
          text: 'Jean Renoir',
          isRight: false
        },
      ]
    },
    {
      id: 6,
      title: 'Who is the author of this picture?',
      picture: 'https://www.biographyonline.net/wp-content/uploads/2014/05/the-girl-with-a-pearl-earring.jpg',
      answers: [
        {
          text: 'Edvard Moonk',
          isRight: false
        },
        {
          text: 'Claude Monet',
          isRight: false
        },
        {
          text: 'Jan Vermeer',
          isRight: true
        },
        {
          text: 'Leonardo Da Vinci',
          isRight: false
        },
      ]
    },
    {
      id: 7,
      title: 'Who is the author of march "Wedding March"?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Felix_Mendelssohn_Bartholdy.jpg/250px-Felix_Mendelssohn_Bartholdy.jpg',
      answers: [
        {
          text: 'Wolfgang Amadeus Mozart',
          isRight: false
        },
        {
          text: 'Niccolò Paganini',
          isRight: false
        },
        {
          text: 'Felix Mendelssohn Bartholdy',
          isRight: true
        },
        {
          text: 'Johann Sebastian Bach',
          isRight: false
        },
      ]
    },
  ]
};


const htmlProgramming = {
  title: 'HTML: Hypertext Markup Language',
  time: 60000,
  questions: [
    {
      id: 1,
      title: 'Who was the primary author of HTML?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      answers: [
        {
          text: 'Brendan Eich',
          isRight: false
        },
        {
          text: 'Sabeer Bhatiya',
          isRight: false
        },
        {
          text: 'Google Inc.',
          isRight: false
        },
        {
          text: 'Tim Berners-Lee',
          isRight: true
        },
      ],
    },
    {
      id: 2,
      title: 'DOM stands for',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      answers: [
        {
          text: 'Document object model',
          isRight: true
        },
        {
          text: 'Data object model',
          isRight: false
        },
        {
          text: 'Document Oriented model',
          isRight: false
        },
        {
          text: 'Data oriented model',
          isRight: false
        },
      ],
    },
    {
      id: 3,
      title: 'Which of the following are attributes of Font Tag ?',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      answers: [
        {
          text: 'Face',
          isRight: false
        },
        {
          text: 'Size',
          isRight: false
        },
        {
          text: 'Color',
          isRight: false
        },
        {
          text: 'All of above',
          isRight: true
        },
      ],
    }
  ]
};

const getQuiz = async (req, res) => {
  try {
    res.json({
      status: 'OK', quiz
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 'ERROR', error: e
    });
  }
};

const addAllQuizzes = async (req, res) => {
  try {
    res.json({
      status: 'OK', quiz
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 'ERROR', error: e
    });
  }
};

module.exports = {
  getQuiz,
  addAllQuizzes,
};
