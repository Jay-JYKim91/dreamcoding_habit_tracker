import React, { PureComponent } from 'react';

import React from 'react';

const HabitAddForm = (props) => {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    return (
        <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
            <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
            <button className="add-button">Add</button>
        </form>
    );
};

export default HabitAddForm;