import React, { useState } from 'react';

import { Todo } from '../types/modelTypes/todo.model';
import { TabItem } from '../types/modelTypes/tabItem.model';
import { markAsDoneFunction } from '../types/functionTypes/markAsDoneFunction';

import './TodoList.css'

interface TodocListProps {
    items: Todo[];
    markdone: markAsDoneFunction;
    deleteTodo: markAsDoneFunction;
}

const TodoList: React.FC<TodocListProps> = (props) => {

    const [currentTab, setcurrentTab] = useState<TabItem>({ id: 1, name: 'Done' });
    const [tabs] = useState<TabItem[]>([ { id: 1, name: 'Pending' }, { id: 2, name: 'Done' } ]);
    
    const toggleCurrentTab = (tabId: TabItem) => {
        setcurrentTab(tabId)
    }

    return <div className="todos-list">
        <div className="todo-tabs">
            { tabs.map(tab => 
                <div
                    className={ currentTab.id === tab.id ? 'list-item current-tab' : 'list-item' }
                    onClick={toggleCurrentTab.bind(null, tab)}
                >
                   { props.items.filter(todo => todo.status === tab.id - 1).length } { tab.name }
                </div>
            ) }
        </div>
        <div className="todos-list-view">
            <div className="header-content">
                { currentTab.name }
            </div>
            <div className="todos-display">
                <ul>
                    { 
                        props.items.filter(todo => todo.status === currentTab.id - 1).map(
                        todo => <li key={`item-${todo.id}-${todo.status}`}>
                                <span>{todo.text}</span>
                                <button
                                    className={todo.status === 0 ? 'mark-done-btn' : 'delete-btn'}
                                    onClick={todo.status === 0 ? props.markdone.bind(null, todo) : props.deleteTodo.bind(null, todo)}>
                                        {todo.status === 0 ? 'DONE' : 'DELETE'}
                                </button>
                            </li>
                        ) 
                    }
                </ul>
            </div>
        </div>
    </div>;
}

export default TodoList;
