import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const formattedDeadline = formatDistanceToNow(new Date(taskObj.deadline), { locale: tr });
  const daysUntilDeadline = differenceInDays(new Date(taskObj.deadline), new Date());
  console.log(daysUntilDeadline);
  return (
    <div className="p-6 bg-white rounded shadow task">
      <h3 className="text-orange-500">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        Son teslim:{" "}
        <span className={`inline-block py-1 px-2 rounded-sm ${daysUntilDeadline <= 3 ? "bg-red-100" : "bg-blue-300"}`}>
          {formattedDeadline} kaldı
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block mt-4 px-4 py-2 mx-auto bg-orange-300 rounded shadow"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
      };

export default Task;
