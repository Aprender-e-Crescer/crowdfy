let backgroundButton = () => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-32 bg-green-100 border border-white rounded-lg p-4">
      <div className="flex flex-col items-center">
        <svg
          className="w-6 h-6 mb-2 text-green-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7m7 6v-12"
          />
        </svg>
        <span className="text-green-700 text-xl font-bold">$53.88</span>
      </div>
    </div>
  );
};

export default backgroundButton;
