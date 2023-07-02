import "./Icon.css";

export default function Icon({ iconClassName }) {
  return (
    <div className="Icon__wrapper">
      <i className={`Icon fa-solid ${iconClassName}`}></i>
    </div>
  );
}

/*
<i className="fa-solid fa-bars"></i>
<i className="fa-solid fa-magnifying-glass"></i>
<i className="fa-solid fa-phone"></i>
<i className="fa-solid fa-ellipsis-vertical"></i>
*/
