import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    render() {
        return (
            <form ref={inputRef} className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;