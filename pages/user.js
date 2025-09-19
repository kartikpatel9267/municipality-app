import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { ref, set, onValue } from "firebase/database";
import dynamic from "next/dynamic";

// Dynamically import Leaflet map (fix SSR issue in Next.js)
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function UserDashboard() {
  const [profile, setProfile] = useState(null);
  const uid = "UID_" + Math.random().toString(36).substr(2, 9);

  // Example save profile
  const saveProfile = () => {
    set(ref(db, "users/" + uid), {
      name: "Rahul",
      area: "Ward 12",
      points: 50,
    });
  };

  useEffect(() => {
    const userRef = ref(db, "users/" + uid);
    onValue(userRef, (snapshot) => {
      setProfile(snapshot.val());
    });
  }, []);

  return (
    <div className="p-4">
      <h2>User Dashboard</h2>
      <button onClick={saveProfile} className="bg-blue-500 text-white px-2 py-1">
        Save Profile
      </button>
      {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
      <Map />
    </div>
  );
}
