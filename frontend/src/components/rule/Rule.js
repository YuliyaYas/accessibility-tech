import React from 'react';
import Passed from '../../assets/pngs/passed.png';
import  Failed from '../../assets/pngs/failed.png';
import './rule.scss';

const Rule = ({ rule }) => {
    {console.log(rule)}
    return (
        <>
        <div>
        { rule.isPassed ? <img src={Passed} alt="passed check" className="check"/> : <img src={Failed} alt="failed check" className="check"/>}
        {rule.description}</div>
        </>
    )
}

export default Rule;