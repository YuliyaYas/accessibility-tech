import React from 'react';
import Passed from '../../assets/pngs/passed.png';
import  Failed from '../../assets/pngs/failed.png';
import './rule.scss';
import cropHTML from '../../utils';

const Rule = ({ rule }) => {
    return (
        <>
        <div>
        { rule.isPassed ? <img src={Passed} alt="passed check" className="check"/> : <img src={Failed} alt="failed check" className="check"/>}
        {rule.description}</div>
        { rule.html && <div className="html-rule"> { cropHTML(rule.html) } </div>}
        </>
    )
}

export default Rule;