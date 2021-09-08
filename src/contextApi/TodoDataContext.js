import React, { Component } from "react";
import axios from "axios";

const TodoDataContext = React.createContext();

const reducer = (state, action) => {

  switch (action.type) {
    case "SEND_CATEGORY_ID":
      return {
        ...state,
        category: state.category,
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        todo: state.todo.filter((todo) => action.payload !== todo.id),
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        category: state.category.filter(
          (category) => action.payload !== category.id
        ),
      };
    case "IS_FAV":
      return {
        ...state,
        category: state.category.map((category) => {
          if (category.id !== action.payload) {
            return category;
          }
          return {
            ...category,
            isNull: !category.isNull,
          };
        }),
      };
    case "CHANGE_COLOR": {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    case "SELECT_MENU": {
      return {
        ...state,
        select: !state.select,
      };
    }
    case "ADD_USER":
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        bookTurkish: state.bookTurkish.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export class TodoDataProvider extends Component {
  state = {
    theme: [],
    select: 1,
    ActiveCategoryID: [],
    category: [],
    todo: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  addLocaleCategory = () => {
    localStorage.setItem("Category", JSON.stringify(this.state.todo));
  };

  addLocaletodo = () => {
    localStorage.setItem("Todo", JSON.stringify(this.state.category));
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/todo");
    this.setState({
      todo: response.data,
    });
    const Secondresponse = await axios.get("http://localhost:3004/category");
    this.setState({
      category: Secondresponse.data,
    });
  };
  render() {
    return (
      <TodoDataContext.Provider
        value={{
          ...this.state,
          addLocaletodo: this.addLocaletodo,
          addLocaleCategory: this.addLocaleCategory,
        }}
      >
        {this.props.children}
      </TodoDataContext.Provider>
    );
  }
}
const TodoDataConsumer = TodoDataContext.Consumer;
export default TodoDataConsumer;