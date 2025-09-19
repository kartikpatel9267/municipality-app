import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { ref, onValue } from "firebase/database";

export default function MunicipalityDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val() || {};
      setUsers(Object.values(data));
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Municipality Dashboard</h2>
      <ul className="mt-4 space-y-2">
        {users.map((u, i) => (
          <li key={i} className="border p-2 rounded">
            {u.name} - {u.area} - {u.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}
