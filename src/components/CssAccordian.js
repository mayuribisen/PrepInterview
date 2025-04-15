import React, { useState } from 'react';
import { cssbasic, cssintermediate, cssadvanced } from './css';
import CssQuestions from './CssQuestions';

const CssAccordian = () => {
    const [category, setCategory] = useState('basic');

    let currentQuestions = [];
    if (category === 'basic') currentQuestions = cssbasic;
    else if (category === 'intermediate') currentQuestions = cssintermediate;
    else if (category === 'advanced') currentQuestions = cssadvanced;

    return (
    <div className='parent-div'>
        <section className='main-div'>
            <h1>CSS Interview Questions</h1>
                <ul className="category-list">
                    <li onClick={() => setCategory('basic')} className={category === 'basic' ? 'active' : ''}>Basic</li>
                    <li onClick={() => setCategory('intermediate')} className={category === 'intermediate' ? 'active' : ''}>Intermediate</li>
                    <li onClick={() => setCategory('advanced')} className={category === 'advanced' ? 'active' : ''}>Advanced</li>
                </ul>
                <div className='vertical-slider'>
                <div className="questions">
                    {currentQuestions.map((curElem) => (
                        <CssQuestions key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </section>
    </div>
    );
};

export default CssAccordian;
