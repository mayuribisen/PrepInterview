import React, { useState } from 'react';
import { bootbasic, bootintermediate, bootadvanced } from './bootstrap';
import './accordion.css';
import BootstrapQuestions from './BootstrapQuestions';


const BootstrapAccordian = () => {
    const [category, setCategory] = useState('basic');

    let currentQuestions = [];
    if (category === 'basic') currentQuestions = bootbasic;
    else if (category === 'intermediate') currentQuestions = bootintermediate;
    else if (category === 'advanced') currentQuestions = bootadvanced;

    return (
        <div className='parent-div'>
        <section className='main-div'>
            <h1>Bootstrap Interview Questions</h1>

         
                <ul className="category-list">
                    <li onClick={() => setCategory('basic')} className={category === 'basic' ? 'active' : ''}>Basic</li>
                    <li onClick={() => setCategory('intermediate')} className={category === 'intermediate' ? 'active' : ''}>Intermediate</li>
                    <li onClick={() => setCategory('advanced')} className={category === 'advanced' ? 'active' : ''}>Advanced</li>
                </ul>
                <div className='vertical-slider'>
                <div className="questions">
                    {currentQuestions.map((curElem) => (
                        <BootstrapQuestions key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
};

export default BootstrapAccordian;
