import React from "react";
import "../css/Button.css";
import { Icon } from "@fluentui/react/lib/Icon";

export default function Button(props) {
  const { buttonName } = props;
  const ButonProperty = () => <Icon iconName={buttonName} />;
  return (
    <div className="controlPanelButton">
      <ButonProperty />
    </div>
  );
}
