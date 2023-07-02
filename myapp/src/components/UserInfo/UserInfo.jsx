import "./UserInfo.css";
import Icon from "../Icon/Icon";

export default function UserInfo(props) {
  return (
    <div className="UserInfo">
      <div className="UserInfo__chatInfo">
        <img className="UserInfo__avatar" src={props.avatar} />
        <div className="UserInfo__chatInfoText">
          <h3 className="UserInfo__title">{props.title}</h3>
          <p className="UserInfo__status">Online</p>
        </div>
      </div>
      <div className="UserInfo__icons">
        <Icon iconClassName="fa-magnifying-glass" />
        <Icon iconClassName="fa-phone" />
        <Icon iconClassName="fa-ellipsis-vertical" />
        <Icon iconClassName="fa-heart" />
      </div>
    </div>
  );
}