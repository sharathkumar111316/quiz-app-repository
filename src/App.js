import { useState } from 'react';

export default function App() {
  const questions = [
                    { questionText: 'Which of the following is the correct name of React.js?',
                      answerOptions: [
                                {answerText: 'React', isCorrect: false },
                                {answerText: 'React.js', isCorrect: false },
                                {answerText: 'ReactJS', isCorrect: false },
                                {answerText: 'All of the above', isCorrect: true },
                      ],

                    },
                    { questionText: ' Which of the following are the advantages of React.js?',
                      answerOptions: [
                                {answerText: 'React.js can increase the application performance with Virtual DOM.', isCorrect: false},
                                {answerText: 'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.', isCorrect: false},
                                {answerText: 'React.js can render both on client and server side.', isCorrect: false},
                                {answerText: 'All of the above', isCorrect: true},
                      ],

                    },
                    { questionText: 'Which of the following is not a disadvantage of React.js?',
                      answerOptions: [
                                {answerText: 'React.js has only a view layer. We have put your code for Ajax requests, events and so on.', isCorrect: false},
                                {answerText: 'The library of React.js is pretty large.', isCorrect: false},
                                {answerText: 'The JSX in React.js makes code easy to read and write.', isCorrect: true},
                                {answerText: 'The learning curve can be steep in React.js.', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following command is used to install create-react-app?',
                      answerOptions: [
                                {answerText: 'npm install -g create-react-app', isCorrect: true},
                                {answerText: 'npm install create-react-app', isCorrect: false},
                                {answerText: 'npm install -f create-react-app', isCorrect: false},
                                {answerText: 'install -g create-react-app', isCorrect: false},
                      ],

                    },
                    { questionText: 'What of the following is used in React.js to increase performance?',
                      answerOptions: [
                                {answerText: 'Original DOM', isCorrect: false},
                                {answerText: 'Virtual DOM', isCorrect: true},
                                {answerText: 'Both A and B.', isCorrect: false},
                                {answerText: 'None of the above.', isCorrect: false},
                      ],

                    },
                    { questionText: 'A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
                      answerOptions: [
                                {answerText: 'Constructor', isCorrect: false},
                                {answerText: 'Class', isCorrect: true},
                                {answerText: 'Object', isCorrect: false},
                                {answerText: 'DataObject', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following acts as the input of a class-based component?',
                      answerOptions: [
                                {answerText: 'Class', isCorrect: false},
                                {answerText: 'Factory', isCorrect: false},
                                {answerText: 'Render', isCorrect: false},
                                {answerText: 'Props', isCorrect: true},
                      ],

                    },
                    { questionText: 'Which of the following keyword is used to create a class inheritance?',
                      answerOptions: [
                                {answerText: 'Create', isCorrect: false},
                                {answerText: 'Inherits', isCorrect: false},
                                {answerText: 'Extends', isCorrect: true},
                                {answerText: 'This', isCorrect: false},
                      ],

                    },
                    { questionText: 'What is the default port where webpack-server runs?',
                      answerOptions: [
                                {answerText: '3000', isCorrect: false},
                                {answerText: '8080', isCorrect: true},
                                {answerText: '3030', isCorrect: false},
                                {answerText: '6060', isCorrect: false},
                      ],

                    },
                    { questionText: 'How many numbers of elements a valid react component can return?',
                      answerOptions: [
                                {answerText: '1', isCorrect: true},
                                {answerText: '2', isCorrect: false},
                                {answerText: '4', isCorrect: false},
                                {answerText: '5', isCorrect: false},
                      ],

                    },
                    { questionText: ' What is the declarative way to render a dynamic list of components based on values in an array?',
                      answerOptions: [
                                {answerText: 'Using the reduce array method', isCorrect: false},
                                {answerText: 'Using the <Each /> component', isCorrect: false},
                                {answerText: 'Using the Array.map() method', isCorrect: true},
                                {answerText: 'With a for/while loop', isCorrect: false},
                      ],

                    },
                    { questionText: 'How many ways of defining your variables in ES6?',
                      answerOptions: [
                                {answerText: '1', isCorrect: false},
                                {answerText: '3', isCorrect: true},
                                {answerText: '4', isCorrect: false},
                                {answerText: '5', isCorrect: false},
                      ],

                    },
                    { questionText: 'What is a state in React?',
                      answerOptions: [
                                {answerText: 'A permanent storage.', isCorrect: false},
                                {answerText: 'Internal storage of the component.', isCorrect: true},
                                {answerText: 'External storage of the component.', isCorrect: false},
                                {answerText: 'None of the above.', isCorrect: false},
                      ],

                    },
                    { questionText: 'What are the two ways to handle data in React?',
                      answerOptions: [
                                {answerText: 'State & Props', isCorrect: true},
                                {answerText: 'Services & Components', isCorrect: false},
                                {answerText: 'State & Services', isCorrect: false},
                                {answerText: 'State & Component', isCorrect: false},
                      ],

                    },
                    { questionText: 'In which of the following directory React.js components are saved?',
                      answerOptions: [
                                {answerText: 'Inside the js/components/', isCorrect: true},
                                {answerText: 'Inside the vendor/components/', isCorrect: false},
                                {answerText: 'Inside the external/components/', isCorrect: false},
                                {answerText: 'Inside the vendor/', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following is a must API for every React.js component?',
                      answerOptions: [
                                {answerText: 'SetinitialComponent', isCorrect: false},
                                {answerText: 'renderComponent', isCorrect: true},
                                {answerText: 'render', isCorrect: false},
                                {answerText: 'All of the above', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following option is correct in the case of the Babel?',
                      answerOptions: [
                                {answerText: 'Babel is a Compiler.', isCorrect: false},
                                {answerText: 'Babel is a Transpilar.', isCorrect: false},
                                {answerText: 'None of the above.', isCorrect: false},
                                {answerText: 'Both A and B are correct.', isCorrect: true},
                      ],

                    },
                    { questionText: 'Does React.js create a VIRTUAL DOM in the memory?',
                      answerOptions: [
                                {answerText: 'TRUE', isCorrect: true},
                                {answerText: 'FALSE', isCorrect: false},
                                {answerText: 'Can be true or false', isCorrect: false},
                                {answerText: 'Cannot say', isCorrect: false},
                      ],

                    },
                    { questionText: 'What is the use of "webpack" command in React.js?',
                      answerOptions: [
                                {answerText: 'The "webpack" command is used to transpile all the JavaScript down into one file.', isCorrect: false},
                                {answerText: 'It runs React local development server.', isCorrect: false},
                                {answerText: 'It is a module bundler.', isCorrect: true},
                                {answerText: 'None of the above.', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following is used to pass data to a component from outside in React.js?',
                      answerOptions: [
                                {answerText: 'SetState', isCorrect: false},
                                {answerText: 'Render with arguments', isCorrect: false},
                                {answerText: 'Props', isCorrect: true},
                                {answerText: 'PropTypes', isCorrect: false},
                      ],

                    },
                    { questionText: 'What does ES6 stand for?',
                      answerOptions: [
                                {answerText: 'ECMAScript 6', isCorrect: true},
                                {answerText: 'ECMA 6', isCorrect: false},
                                {answerText: 'ECMAJavaScript 6', isCorrect: false},
                                {answerText: 'EJavaScript 6', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following function is used to change the state of the React.js component?',
                      answerOptions: [
                                {answerText: 'this.setState', isCorrect: true},
                                {answerText: 'this.setChangeState', isCorrect: false},
                                {answerText: 'this.State{}', isCorrect: false},
                                {answerText: 'None of the above.', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following method refers to the parent class in React.js?',
                      answerOptions: [
                                {answerText: 'inherits()', isCorrect: false},
                                {answerText: 'self()', isCorrect: false},
                                {answerText: 'super()', isCorrect: true},
                                {answerText: 'this()', isCorrect: false},
                      ],

                    },
                    { questionText: 'What will happen if you render an input element with disabled = {false}?',
                      answerOptions: [
                                {answerText: 'It will be rendered as disabled', isCorrect: false},
                                {answerText: 'It will not be rendered at all', isCorrect: false},
                                {answerText: 'It will be rendered as enabled', isCorrect: true},
                                {answerText: 'You cannot set it false.', isCorrect: false},
                      ],

                    },
                    { questionText: 'Which of the following function is called to render HTML to the web page in React?',
                      answerOptions: [
                                {answerText: 'render()', isCorrect: true},
                                {answerText: 'render()', isCorrect: false},
                                {answerText: 'ReactDOM_render()', isCorrect: false},
                                {answerText: 'render()', isCorrect: false},
                      ],

                    },
                    ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleanswerOptionClick = (isCorrect) => {
          if (isCorrect) {
                  setScore(score + 1);
          }
          const nextQuestion = currentQuestion + 1;
          if(nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
          } else {
                setShowScore(true);
          }
  };

  return(
    <div className='app'>
      {showScore ? (
            <div className='score-section'> You have scored {score} out of {questions.length}</div>
        ) : (
            <>
                <div className='question-section'>
                      <div className='question-count'>
                        <span>Question { currentQuestion + 1}</span>/{questions.length}
                      </div>
                      <div className='question-text'>{questions[currentQuestion].questionText}
                      </div>
                </div>
                
                <div className='answer-section'>
                      {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleanswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                </div>

            </>
        )}
    </div>
    );
}