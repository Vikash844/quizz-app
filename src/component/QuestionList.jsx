import React from 'react';

const QuestionList = ({ question, questionNo, options, handleClick, currentAnswer, nextQuestion }) => {
    console.log(question);
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>Queastion: {questionNo}{question}</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {
                                    options.map((option, index) => (
                                        <li key={index} onClick={() => handleClick(option)} className={`list-group-item ${currentAnswer === option ? 'list-group-item-success' : ''}`}>
                                            {option}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='d-flex justify-content-center my-3'>
                            <button className='btn btn-success' disabled={currentAnswer === null} onClick={nextQuestion} >Next Question</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionList;
