import Link from "next/link";
const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <h1 className="text-7xl font-bold text-[#ccff00]">
        404
      </h1>
      <h2 className="text-3xl font-bold mt-4">
        PAGE NOT FOUND
      </h2>
      <p className="text-gray-400 mt-3">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn mt-6 bg-[#ccff00] text-black border-none">
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;