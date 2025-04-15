import React, { useState } from 'react';
import { reactbasic, reactintermediate, reactadvanced } from './react';
import './accordion.css';
import ReactQuestion from './ReactQuestion';

const ReactAccordian = () => {
    const [category, setCategory] = useState('basic');

    let currentQuestions = [];
    if (category === 'basic') currentQuestions = reactbasic;
    else if (category === 'intermediate') currentQuestions = reactintermediate;
    else if (category === 'advance') currentQuestions = reactadvanced;

    return (
        <div className='parent-div'>
        <section className='main-div'>
            <h1>React Interview Questions</h1>

         
                <ul className="category-list">
                    <li onClick={() => setCategory('basic')} className={category === 'basic' ? 'active' : ''}>Basic</li>
                    <li onClick={() => setCategory('intermediate')} className={category === 'intermediate' ? 'active' : ''}>Intermediate</li>
                    <li onClick={() => setCategory('advance')} className={category === 'advance' ? 'active' : ''}>Advanced</li>
                </ul>
                <div className='vertical-slider'>
                <div className="questions">
                    {currentQuestions.map((curElem) => (
                        <ReactQuestion key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
};

export default ReactAccordian;
