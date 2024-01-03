// import React from "react";
// import Board from '@asseinfo/react-kanban'
// import '@asseinfo/react-kanban/dist/styles.css'
// import board from '../../../Constants/kanban'

// const Progress = () => {
//     return(
//         <div className="w-full h-screen bg-white py-4">
//             <p className="text-3xl font-bold mb-4 pl-4">Progress Kanban</p>
//             <Board initialBoard={board}/>
//             <button className="text-white bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded mt-16 ml-4">Add Task</button>
//         </div>
//     )
// }

// export default Progress;

import React, { useState } from "react";
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import initialBoard from '../../../Constants/kanban'

const Progress = () => {
    const [board, setBoard] = useState(initialBoard);
    const [boardKey, setBoardKey] = useState(Date.now());

    const addNewTask = () => {
        const newTask = {
            id: Date.now(), 
            title: 'New Task',
            description: 'This is a demo task'
        };

        const updatedBoard = {
            ...board,
            columns: board.columns.map(column => {
                if (column.title === 'Backlog') {
                    return {
                        ...column,
                        cards: [...column.cards, newTask]
                    };
                }
                return column;
            })
        };

        setBoard(updatedBoard);
        setBoardKey(Date.now());
    };

    return(
        <div className="w-full h-screen bg-white py-4">
            <p className="text-3xl font-bold mb-4 pl-4">Progress Kanban</p>
            <Board key={boardKey} initialBoard={board}/>
            <button 
                className="text-white bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded mt-16 ml-4"
                onClick={addNewTask}
            >
                Add Task
            </button>
        </div>
    )
}

export default Progress;


