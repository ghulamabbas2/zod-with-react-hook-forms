import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <Link
        href="/simple-form"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Simple Form with useState
      </Link>
      <Link
        href="/react-hook-form-with-zod"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Form with React Hook Form & Zod
      </Link>
    </main>
  );
}
