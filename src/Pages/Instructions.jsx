import React from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
    return (
        <section className="homepage">
            <div className="startscreen instruction-bx">

                <h2>Instructions</h2>
                <h6>Scroll down, read all the instructions carefully, and then click the 'Start Quiz' button</h6>

                <div className="overflow">


                    <ul className='instructions'>
                        <li><strong>Start the Game</strong> – The first question will be displayed.</li>
                        <li><strong>Read the Question</strong> – Carefully read the question and available answer choices.</li>
                        <li><strong>Select an Answer</strong> – Click on one of the multiple-choice options.
                            <ul>
                                <li>If your answer is <strong>correct ✅</strong>, it will turn green.</li>
                                <li>If your answer is <strong>incorrect ❌</strong>, it will turn red, and the correct answer will be revealed.</li>
                            </ul>
                        </li>
                        <li><strong>Unlock the Next Question</strong> – The <em>“Next”</em> button will be enabled after selecting an answer.</li>
                        <li><strong>Move to the Next Question</strong> – Click <em>“Next”</em> to proceed to the next question.</li>
                        <li><strong>View Explanation</strong> – After answering, a detailed solution may be shown below the options.</li>
                        <li><strong>Complete the Quiz</strong> – Answer all questions to finish the quiz.</li>
                        <li><strong>See Your Results</strong> – Your final score and performance summary will be displayed.</li>
                    </ul>


                </div>

                <Link to={"/quiz"} className='start-btn-link' >
                    <button className='main-btn startquiz-bttn'>
                        Start Quiz Now
                    </button>
                </Link>
            </div>

        </section>
    )
}

export default Instructions