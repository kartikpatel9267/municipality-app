import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <Link href="/user">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">User</button>
      </Link>
      <Link href="/municipality">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Municipality</button>
      </Link>
    </div>
  );
}
