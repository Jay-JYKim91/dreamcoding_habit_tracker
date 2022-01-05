import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
        {name: "Reading", count: 2, id: 1},
        {name: "Running", count: 1, id: 2},
        {name: "Coding", count: 3, id: 3}
    ]
  };

  handleIncrement = (habit) => {
    //직접적으로 배열을 수정하면 좋지 않기 때문에 새로운 배열에 껍데기를 만들자
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits});
  }
  handleDecrement = (habit) => {
      //직접적으로 배열을 수정하면 좋지 않기 때문에 새로운 배열에 껍데기를 만들자
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({ habits: habits});
  }
  handelDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id != habit.id);
      this.setState({ habits });
  }
  render() {
    return (
      <Habits
        habits={this.state.habits} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handelDelete}
      />
    )
  }
}

export default App;
