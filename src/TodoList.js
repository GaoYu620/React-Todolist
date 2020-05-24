import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: "",
			list: [],
		};
	}

	render() {
		return (
			<Fragment>
				<label htmlFor='insertArea'>Input</label>
				<input
					id='insertArea'
					className='input'
					value={this.state.inputValue}
					onChange={this.handleInputChange.bind(this)}
				/>
				<button onClick={this.handleBtnClick.bind(this)}>Submit</button>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<div>
								<TodoItem
									content={item}
									index={index}
									deleteItem={this.handleItemDelete.bind(this)}
								/>

								{/*<li
                                    key={index}
                                    onClick={this.handleItemDelete.bind(this, index)}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                ></li>*/}
							</div>
						);
					})}
				</ul>
			</Fragment>
		);
	}

	handleInputChange(e) {
		this.setState({ inputValue: e.target.value });
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: "",
		});
	}

	handleItemDelete(index) {
		//immutable
		//state不允许我们做任何的改变

		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list,
		});
	}
}

export default TodoList;
