import React, { useEffect, useState } from 'react';
import './Questionbox.css';
import Answer from './Answer';

const Questionbox = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [clicked, setClicked] = useState(false);

    const letters = ["A", "B", "C", "D"];

    useEffect(() => {
        if (props.questions.length > 0 && props.qNumber < props.questions.length) {
            setCurrentQuestion(props.questions[props.qNumber]);
            setSelectedIndex(null);
            setIsCorrect(null);
            setCorrectIndex(null);
            setClicked(false);
            props.setNextButton(true);
        }
    }, [props.qNumber, props.questions]);

    const handleOptionClick = (index) => {
        if (clicked) return;

        setSelectedIndex(index);
        const isAnswerCorrect = currentQuestion.options[index].is_correct;
        setIsCorrect(isAnswerCorrect);

        const correctIdx = currentQuestion.options.findIndex(option => option.is_correct);
        setCorrectIndex(correctIdx);

        setClicked(true);
        props.setNextButton(false);

        if (props.qNumber == 9) {
            props.setCompleted(1)
        }

        isAnswerCorrect ? props.SetPoints((prev) => prev + 10) : ''
    };

    if (!currentQuestion) return <p>Loading...</p>;

    return (
        <div className="questionarea">
            <div className="questionbox">
                Q. {currentQuestion?.description}
            </div>

            <div className="options">
                {currentQuestion?.options?.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`option 
                            ${correctIndex === index ? 'correct-answer' : ''} 
                            ${selectedIndex === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                    >
                        <span className='letter'><b>{letters[index]}. </b></span>
                        {option?.description}
                    </div>
                ))}
            </div>

            {
                clicked ? (
                    <Answer solution={currentQuestion?.detailed_solution} />

                ) : ''
            }
        </div>
    );
};

export default Questionbox;
