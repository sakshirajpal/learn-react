import React from  'react';
import PropTypes from 'prop-types';

const tasks = [
    {
        id: 1,
        name: 'Sexy'
    },
    {
        id: 2,
        name: 'Very Sexy'
    },
    {
        id: 3,
        name: 'Very Very Sexy'
    }
];
const Task = () => {
    return (
        <div>
            {
                tasks.map((t) => {
                   return <h3 key = {t.id}> { t.name } </h3>
                })
            }
        </div>
    );
};

export default Task;