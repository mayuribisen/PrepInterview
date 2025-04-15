import React, { useState } from 'react';
import { jsbasic, jsintermediate, jsadvanced } from './javascript';
import './accordion.css';
import JavaScriptQuestions from './JavascriptQuestions';

const JavaScriptAccordian = () => {
    const [category, setCategory] = useState('basic');

    let currentQuestions = [];
    if (category === 'basic') currentQuestions = jsbasic;
    else if (category === 'intermediate') currentQuestions = jsintermediate;
    else if (category === 'advanced') currentQuestions = jsadvanced;

    return (
        <div className='parent-div'>
        <section className='main-div'>
            <h1>JavaScript Interview Questions</h1>

           
                <ul className="category-list">
                    <li onClick={() => setCategory('basic')} className={category === 'basic' ? 'active' : ''}>Basic</li>
                    <li onClick={() => setCategory('intermediate')} className={category === 'intermediate' ? 'active' : ''}>Intermediate</li>
                    <li onClick={() => setCategory('advanced')} className={category === 'advanced' ? 'active' : ''}>Advanced</li>
                </ul>
                <div className='vertical-slider'>
                <div className="questions">
                    {currentQuestions.map((curElem) => (
                        <JavaScriptQuestions key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
};

export default JavaScriptAccordian;
