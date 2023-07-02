import { useState } from "react";
import "./RecordButton.css";

export default function RecordButton() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div
      className="RecordButton"
      onClick={() => {
        if (isRecording) {
          setIsRecording(false);
        } else {
          setIsRecording(true);
        }
      }}
    >
      {isRecording ? (
        <i className="fa-regular fa-paper-plane"></i>
      ) : (
        <i className="fa-solid fa-microphone"></i>
      )}
    </div>
  );
}

// Старая версия компонента

// const [state, setState] = useState(false);

//   let className = "RecordButton";
//   if (state) {
//     className += " RecordButton--red";
//   }
//   return (
//     <div
//       className={className}
//       onClick={() => {
//
//         if (state) {
//           setState(false);
//         } else {
//           setState(true);
//         }
//       }}
//     >
//       {state ? "Stop Recording" : "Record Button"}
//     </div>
//   );