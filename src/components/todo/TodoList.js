import React from "react";
import TodoDataConsumer from "../../contextApi/TodoDataContext";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <section>
        <div>
          <TodoDataConsumer>
            {(value) => {
              return (
                <div className="scrollBarTodo">
                  {
                    // eslint-disable-next-line
                    value.category.map((tag, i) => {
                      if (
                        tag.categoryID === sessionStorage.getItem("catgoryID")
                      ) {
                        return (
                          <Todo
                            key={i}
                            isNull={tag.isNull}
                            name={tag.name}
                            id={tag.id}
                          />
                        );
                      } else if (
                        "fav" === sessionStorage.getItem("catgoryID")
                      ) {
                        // eslint-disable-next-line
                        if (tag.isNull == 0) {
                          return (
                            <Todo
                              key={i}
                              isNull={tag.isNull}
                              name={tag.name}
                              id={tag.id}
                            />
                          );
                        }
                      } else if (
                        "menu" === sessionStorage.getItem("catgoryID")
                      ) {
                        return (
                          <Todo
                            key={i}
                            isNull={tag.isNull}
                            name={tag.name}
                            id={tag.id}
                          />
                        );
                      }
                    })
                  }
                </div>
              );
            }}
          </TodoDataConsumer>
        </div>
      </section>
    );
  }
}

export default TodoList;