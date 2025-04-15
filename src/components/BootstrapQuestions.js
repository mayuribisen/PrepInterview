import React, { useState } from 'react';

const BootstrapQuestions = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
        <div className='main-heading'>
            <p onClick={() => setShow(!show)}>{show ? "➖":" ➕"}</p>
            <h3>{question}</h3>
        </div>
        {show && <p className='answers'><pre>{answer}</pre></p>}
        </>
    );
};

export default BootstrapQuestions;
