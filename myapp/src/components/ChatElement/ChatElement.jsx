import { useRef } from "react";
import "./ChatElement.css";

export default function ChatElement(props) {
  // Для Леши :) не повторяйте это дома
  // const { avatar, title, time, description } = props;

  const ref = useRef();

  const className = props.isBlue
    ? "ChatElement ChatElement--blue"
    : "ChatElement";

  return (
    <div ref={ref} className={className} onClick={props.handleClick}>
      <img className="ChatElement__avatar" src={props.avatar} />
      <div className="ChatElement__content">
        <p className="ChatElement__title">{props.title}</p>
        <p className="ChatElement__description">{props.description}</p>
      </div>
      <div className="ChatElement__time">{props.time}</div>
    </div>
  );
}
 






