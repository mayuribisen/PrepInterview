import React, { useState } from 'react';
import { htmlbasic, htmlintermediate, htmladvanced } from './html';
import HtmlQuestions from './HtmlQuestions';

const HtmlAccordian = () => {
    const [category, setCategory] = useState('basic');

    let currentQuestions = [];
    if (category === 'basic') currentQuestions = htmlbasic;
    else if (category === 'intermediate') currentQuestions = htmlintermediate;
    else if (category === 'advanced') currentQuestions = htmladvanced;

    return (
        <div className='parent-div'>  
        <section className='main-div'>
            <h1>HTML Interview Questions</h1>
                <ul className="category-list">
                    <li onClick={() => setCategory('basic')} className={category === 'basic' ? 'active' : ''}>Basic</li>
                    <li onClick={() => setCategory('intermediate')} className={category === 'intermediate' ? 'active' : ''}>Intermediate</li>
                    <li onClick={() => setCategory('advanced')} className={category === 'advanced' ? 'active' : ''}>Advanced</li>
                </ul>
                <div className='vertical-slider'>
                <div className="questions">
                    {currentQuestions.map((curElem) => (
                        <HtmlQuestions key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
};

export default HtmlAccordian;
