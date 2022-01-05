import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handelDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        // 외부에서 전달받은 habit 이라는 오브젝트의 데이터를 보여주기만 하는 컴포넌트
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span> 
                <span className="habit-count">{count}</span> 
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>  
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>  
                </button>
                <button className="habit-button habit-delete" onClick={this.handelDelete}>
                    <i className="fas fa-trash"></i>  
                </button>
            </li>
            
        );
    }
}

export default Habit;