const quiz = {
  title: 'Pam pam pam, tuc tuc tuc',
  time: 15000,
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
          text: 'Vlada',
          isRight: false
        },
        {
          text: 'Edvard Moonk',
          isRight: false
        },
        {
          text: 'Mozart',
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
          text: 'Misha',
          isRight: false
        },
        {
          text: 'Vlada',
          isRight: false
        },
        {
          text: 'Edvard Moonk',
          isRight: true
        },
        {
          text: 'Bogdan',
          isRight: false
        },
      ]
    },
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
