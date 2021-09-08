import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import TodoDataConsumer from "../../contextApi/TodoDataContext";
import axios from "axios";

export default function Todo(props) {
  const { isNull } = props;
  const isNullint = isNull * 1;
  const ButonProperty = () => <Icon iconName="Delete" />;
  const Fav = () => <Icon iconName="FavoriteStar" />;
  const FavFill = () => <Icon iconName="FavoriteStarFill" />;
  const AllApps = () => <Icon iconName="List" />;

  const onDeleteUser = async (dispatch, e) => {
    const id = props.id;
    // eslint-disable-next-line
    const response = await axios.delete(`http://localhost:3004/category/${id}`);
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const onFav = async (dispatch, e) => {
    const id = props.id;
    const response = await axios.get(`http://localhost:3004/category/${id}`);
    var url = `http://localhost:3004/category/${id}`;
    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {};
    var data = `{"isNull": ${!response.data.isNull}}`;
    xhr.send(data);
    dispatch({ type: "IS_FAV", payload: id });
  };
  return (
    <div>
      <TodoDataConsumer>
        {(value) => {
          return (
            <div>
              <div className="ListLogo">
                <div className="AllAppsLogo">
                  <AllApps />
                </div>
                {/*  eslint-disable-next-line */}
                <a>
                  <div className="TodoContext">
                    <div>{props.name}</div>
                  </div>
                </a>
                <div style={{ display: "flex" }}>
                  <div
                    className="checkButton"
                    onClick={onDeleteUser.bind(this, value.dispatch)}
                  >
                    <ButonProperty />
                  </div>
                </div>
                {isNullint ? (
                  <div
                    className="EditButton"
                    onClick={onFav.bind(this, value.dispatch)}
                  >
                    <Fav />
                  </div>
                ) : (
                  <div
                    className="EditButton"
                    onClick={onFav.bind(this, value.dispatch)}
                  >
                    <FavFill />
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </TodoDataConsumer>
    </div>
  );
}