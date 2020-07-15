import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import QuizComplete from '../../components/QuizComplete/QuizComplete';

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    quiz: [
      {
        question: 'Какого цвета снег?',
        rightAnswerId: 0,
        answers: [
          { text: 'Белый', id: 1 },
          { text: 'Красный', id: 2 },
          { text: 'Желтый', id: 3 },
          { text: 'Черный', id: 4 },
        ],
        userInsert: null,
        answered: false,
      },
      {
        question: 'В каком году основали Питер?',
        rightAnswerId: 0,
        answers: [
          { text: '1703', id: 1 },
          { text: '1350', id: 2 },
          { text: '1458', id: 3 },
          { text: '1803', id: 4 },
        ],
        userInsert: null,
        answered: false,
      },
      {
        question: 'Сколько будет 2+2*2?',
        rightAnswerId: 1,
        answers: [
          { text: '4', id: 1 },
          { text: '6', id: 2 },
          { text: '8', id: 3 },
          { text: 'ln10', id: 4 },
        ],
        userInsert: null,
        answered: false,
      },
      {
        question: 'Площадь экватора (км)?',
        rightAnswerId: 3,
        answers: [
          { text: '4 000', id: 1 },
          { text: '60 000', id: 2 },
          { text: '80 0000', id: 3 },
          { text: '40 000', id: 4 },
        ],
        userInsert: null,
        answered: false,
      },
      {
        question: 'Сколько месяцев в году длится зима?',
        rightAnswerId: 2,
        answers: [
          { text: '4', id: 1 },
          { text: '6', id: 2 },
          { text: '3', id: 3 },
          { text: '12', id: 4 },
        ],
        userInsert: null,
        answered: false
      },
    ]
  };

  onAnswer = (answerId, activeQuestion) => {
    // console.log(
    //   'Выбранный ответ: ',
    //   this.state.quiz[activeQuestion].answers.find(
    //     (answer) => answer.id === answerId
    //   ).text
    // );
    const quiz = this.state.quiz;
    if (!quiz[activeQuestion].answered) {
      quiz[activeQuestion].userInsert = answerId - 1;
      this.setState({ quiz });
    }
  };

  answerQuestion = (activeQuestion) => {
    if(this.state.quiz[activeQuestion].userInsert === null) {
      return
    }
    const quiz = this.state.quiz;
    quiz[activeQuestion].answered = true;
    this.setState({ quiz });

    this.getNextQuestion();
  };

  getNextQuestion = () => {
    // console.log('NextQuestion');
    const currentQuestion = this.state.activeQuestion;
    if (currentQuestion > 0 && currentQuestion < this.state.quiz.length) {
      for (var i = currentQuestion + 1; i < this.state.quiz.length; i++) {
        if (!this.state.quiz[i].answered) {
          this.setState({ activeQuestion: i });
          return;
        }
      }
    }

    for (i = 0; i < this.state.quiz.length; i++) {
      if (!this.state.quiz[i].answered) {
        this.setState({ activeQuestion: i });
        return;
      }
    }

    this.setState({ isFinished: true });
  };

  prevQuestion = (activeQuestion) => {
    activeQuestion > 0
      ? this.setState({ activeQuestion: activeQuestion - 1 })
      : this.setState({ activeQuestion: this.state.quiz.length - 1 });
  };

  nextQuestion = (activeQuestion) => {
    activeQuestion <= this.state.quiz.length
      ? this.setState({ activeQuestion: activeQuestion - 1 })
      : this.setState({ activeQuestion: 0 });
  };

  quizReset = () => {
    // document.location.reload();
    const quiz = this.state.quiz.map(el => {
      el.answered = false;
      el.userInsert = null;
      return el;
    });
    this.setState({
      quiz,
      isFinished: false,
      activeQuestion: 0,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {!this.state.isFinished ? (
            <div>
              <h1>Опросник</h1>
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                quizLength={this.state.quiz.length}
                activeQuestion={this.state.activeQuestion + 1}
                userInsert={
                  this.state.quiz[this.state.activeQuestion].userInsert
                }
                userAnswered={
                  this.state.quiz[this.state.activeQuestion].answered
                }
                onAnswerClick={this.onAnswer}
                nextQuestion={this.nextQuestion}
                prevQuestion={this.prevQuestion}
              />
              <button
                onClick={() => {
                  this.answerQuestion(this.state.activeQuestion);
                }}
              >
                Ответить
              </button>
            </div>
          ) : (
            <QuizComplete
              quizState={this.state.quiz}
              quizReset={this.quizReset}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
