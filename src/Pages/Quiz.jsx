import React, { useEffect, useState } from 'react';
import rawData from '../data.json';
import Questionbox from '../components/Question_box/Questionbox';
import Scorecard from '../components/Question_box/Scorecard';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [qNumber, setQNumber] = useState(0);
    const [nextButton, setNextButton] = useState(true);
    const [completed, setCompleted] = useState(false)
    const [points, SetPoints] = useState(0)
    const [result, setResult ] = useState(false)

    useEffect(() => {
        if (rawData?.questions) {
            setQuestions(rawData.questions);
        }

    }, []);

    const handleNextQuestion = () => {
        qNumber <= 9 ? setQNumber((prev) => prev + 1) :'';

        console.log(qNumber)
        console.log(completed)
    };

    return (
        <>
            <header className="quiz-header">
                <span className="quiz-title">{rawData.title}</span>
            </header>

            <main>
                {questions.length > 0 && (
                    <Questionbox
                        setNextButton={setNextButton}
                        qNumber={qNumber}
                        questions={questions}
                        setCompleted={setCompleted}
                        SetPoints={SetPoints}
                    />
                )}

              
            </main>

            <footer className="quiz-footer">
                {
                    completed ? (

                        <>
                            <span className="question-count">
                                Quiz completed
                            </span>

                            <button className='footerbtn' onClick={() => setResult(true)}>
                                show result
                            </button>

                        </>

                    ) : (
                        <>
                            <span className="question-count">
                                {qNumber + 1} out of {questions.length} Questions
                            </span>

                            <button className='footerbtn' onClick={handleNextQuestion} disabled={nextButton}>
                                Next
                            </button>
                        </>
                    )
                }

            </footer >
            {
                result ? <Scorecard points={points} /> : '' 
            }
             
        </>
    );
};

export default Quiz;
