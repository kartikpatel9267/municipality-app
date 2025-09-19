import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { ref, query, orderByChild, limitToLast, onValue } from "firebase/database";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const q = query(ref(db, "users"), orderByChild("points"), limitToLast(10));
    onValue(q, (snapshot) => {
      const data = snapshot.val() || {};
      const arr = Object.values(data).sort((a, b) => b.points - a.points);
      setLeaders(arr);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Leaderboard</h2>
      <ol className="mt-4 space-y-2">
        {leaders.map((u, i) => (
          <li key={i} className="border p-2 rounded">
            #{i + 1} {u.name} - {u.points} points
          </li>
        ))}
      </ol>
    </div>
  );
}
