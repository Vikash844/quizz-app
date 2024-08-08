import React, { useState } from 'react';
import QuestionList from './QuestionList';

function Question() {
    const questions = [
        {
            questionNo: 1,
            question: "What is 2 + 2",
            options: ["2", "4", "6", "8"],
            answer: '4'
        },
        {
            questionNo: 2,
            question: "What is 5 + 2",
            options: ["2", "4", "7", "8"],
            answer: '7'
        },
        {
            questionNo: 3,
            question: "What is 3 x 2",
            options: ["2", "4", "6", "8"],
            answer: '6'
        },
        {
            questionNo: 4,
            question: "What is 2 / 2",
            options: ["1", "4", "6", "8"],
            answer: '1'
        },
        {
            questionNo: 5,
            question: "What is 2 x 6",
            options: ["12", "14", "6", "2"],
            answer: '12'
        },
    ]


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [score, setScore] = useState(0)

    const handleClick = (option) => {
        setCurrentAnswer(option)
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1)
        }
    }
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer(null);
    }

    return (
        <>
            {currentQuestion < questions.length ? <div>
                <QuestionList question={questions[currentQuestion].question} options={questions[currentQuestion].options} handleClick={handleClick} currentAnswer={currentAnswer} nextQuestion={nextQuestion} />
            </div> : <div className="alert alert-success mt-5" role="alert">
                <h3>Thankyou for attending Quiz</h3>
                <h3>Your Score is {score}/{questions.length} </h3>
            </div>
            }
        </>
    )
}

export default Question;