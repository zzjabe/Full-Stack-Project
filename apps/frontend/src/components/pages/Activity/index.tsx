import { useActivity } from "../../../hooks/useActivity";
import type { Activity } from "../../.././../../../shared/types/activity";
import "./index.css";

/*

This component displays the activity history of the library.

It uses the useActivity hook to retrieve activity data.
The hook communicates with the activityService, which contains the logic
for managing activity. The service then interacts with the activityRepo,
which stores the data.


*/

function formatMessage(a: Activity): string {
  if (a.action === "ADD_BOOK") {
    const classificationText = a.classification
      ? ` to ${a.classification}`
      : "";
    return `Added "${a.bookTitle}"${classificationText}`;
  }

  if (a.action === "DELETE_BOOK") {
    return `Deleted "${a.bookTitle}"`;
  }

  return "Reset books";
}

function ActivityPage() {
  const { activity } = useActivity();

  return (
    <div className="activity">
      <h2 className="activity-title">Activity</h2>
      <p className="activity-subtitle">Recent actions in your library</p>

      <ul className="list">
        {activity.map((item) => (
          <li key={item.id} className="list-item">
            <span className="book-title">{formatMessage(item)}</span>
            <span>{item.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityPage;
