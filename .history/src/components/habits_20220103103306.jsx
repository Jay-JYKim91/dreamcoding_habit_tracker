import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {name: "Reading", count: 2, id: 1},
            {name: "Running", count: 1, id: 2},
            {name: "Coding", count: 3, id: 3}
        ]
    }
    handleIncrement = (habit) => {

    }
    handleDecrement = (habit) => {

    }
    handelDelete = (habit) => {

    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;