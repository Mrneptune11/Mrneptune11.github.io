//my resume page

//CSS imports
import '../../CSS/app.css';

// react imports
import { useState } from 'react';

//asset imports
import gameDevResume from '/assets/pdf/gameDevResume.pdf';
import softDevResume from '/assets/pdf/softDevResume.pdf';

//component imports
import { SubBar, type MetaTag, type SubBarItem } from '../components/component';

function Resume() {

    const [filter, setFilter] = useState<string>(gameDevResume);

    const items:Array<SubBarItem> = [
        {label: "Game Development", tag : gameDevResume as MetaTag},
        {label: "Software Engineering", tag : softDevResume as MetaTag},
    ];

    return (
        <div className="page">
            <br/>
            <SubBar items={items} setFilter={setFilter}></SubBar>
            <embed src={filter} type="application/pdf" width="100%" height="800px" />
        </div>
    )
}


export default Resume