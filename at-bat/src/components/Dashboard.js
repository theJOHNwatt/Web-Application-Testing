import React, {useState} from 'react';

export const addStrikes = currentStrike => {
    if (currentStrike >= 2) {
        return 0;
    }
    else{
        return currentStrike + 1,
        console.log('Strike added to count');
        }
};


export const addBallCount = currentBall => {
    if (currentBall >= 3) {
        return 0;
    }
    else {
        
        return currentBall + 1,
        console.log('Ball added to count');
    }
};

export const addFoul = currentStrike => {
    if (currentStrike >= 2) {
        return currentStrike
    }
    else {
        return currentStrike + 1,
        console.log('Foul added to count');
        }
};

export const hits = currentValue => {
    return currentValue = 0,
    console.log('Hit!');
}

function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [ball, setBall] = useState(0);

    return (
        <div className='button-container'>
            <button onClick={() => setStrikes(addStrikes(strikes))}>Strike</button>
            <button onClick={() => setBall(addBallCount(ball))}>Ball</button>
            <button onlick={() => setStrikes(addFoul(strikes))}>Foul</button>
            <button onclick={() => setStrikes(hits(strikes), setBall(hits(ball)))}>Hit</button>
        </div>
    )
}

export default Dashboard;