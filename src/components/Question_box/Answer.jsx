import React from 'react'

const Answer = (props) => {
    
    return (


        <>
            <div className='answerbox'>

                <h3>Detailed Solution</h3>
                <br />
                <p>{props.solution}</p>
            </div>
        </>
    )
}

export default Answer