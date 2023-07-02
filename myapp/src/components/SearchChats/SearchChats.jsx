import "./SearchChats.css";

export default function SearchChats() {
  return (
    <div className="SearchChats">
      <i className="SearchChats__icon fa-solid fa-magnifying-glass"></i>
      <input className="SearchChats__input" placeholder="Search" />
    </div>
  );
}
