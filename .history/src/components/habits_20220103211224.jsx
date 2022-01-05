import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }
    handelDelete = (habit) => {
        this.props.onDelete(habit);
    }
    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handelDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;