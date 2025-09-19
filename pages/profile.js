import { useState } from "react";
import { db } from "../utils/firebase";
import { ref, set } from "firebase/database";

export default function Profile() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const uid = "UID_" + Math.random().toString(36).substr(2, 9);

  const saveProfile = () => {
    set(ref(db, "users/" + uid), {
      name,
      area,
      points: 0
    });
    alert("Profile saved!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Create Profile</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <input
        type="text"
        placeholder="Enter area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button onClick={saveProfile} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Save Profile
      </button>
    </div>
  );
}
