import React, { useState, useEffect } from "react";
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import initialBoard from '../../../Constants/kanban'
import { Modal, Button, Form } from 'react-bootstrap';

const Progress = () => {
    const [board, setBoard] = useState(initialBoard);
    const [boardKey, setBoardKey] = useState(Date.now());
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const addNewTask = (task) => {
        const updatedBoard = {
            ...board,
            columns: board.columns.map(column => {
                if (column.title === 'Backlog') {
                    return {
                        ...column,
                        cards: [...column.cards, task]
                    };
                }
                return column;
            })
        };

        setNewTask({...task, id: Math.random()*1000})
        setBoard(updatedBoard);
        setBoardKey(Math.random()*10000);
        handleCloseModal();
    };

    return(
        <div className="w-full h-screen bg-white py-4">
            <p className="text-3xl font-bold mb-4 pl-4">Progress Kanban</p>
            <button 
                className="text-white bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded ml-4"
                onClick={handleShowModal}
            >
                Add Task
            </button>

            {/* kanban board */}
            <Board key={boardKey} initialBoard={board}/>

            {/* modal to fill task data */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="taskTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter task title"
                                value={newTask.title}
                                className="rounded"
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="taskDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter task description"
                                value={newTask.description}
                                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="text-gray-600" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" className="text-blue-600" onClick={() => addNewTask(newTask)}>
                        Add Task
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Progress;
