import Icon from "../Icon/Icon";
import SearchChats from "../SearchChats/SearchChats";
import "./ChatsHeader.css";

function ChatsHeader() {
  return (
    <div className="ChatsHeader">
      <Icon iconClassName="fa-bars" />
      <div className="ChatsHeader__temp" />
      <SearchChats />
    </div>
  );
}

export default ChatsHeader;
