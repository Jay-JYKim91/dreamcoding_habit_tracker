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
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits});
    }
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        habits[index].count--;
        this.setState({ habits: habits});
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
                        onDecrement={this.handleDecrement}
                        onDelete={this.handelDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;