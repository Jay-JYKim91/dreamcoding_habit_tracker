import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

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
    handleAdd = (name) => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            name={habit.name}
                            count={habit.count}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handelDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset all</button>
            </>
            
        );
    }
}

export default Habits;