const Authorization = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-60">
      <form
        method="POST"
        className="flex flex-col items-center font-sans p-8 mx-6"
      >
        <label htmlFor="code" className="px-4 text-lg md:text-2xl text-center">
          Enter the code you have received from the examinator:
        </label>
        <input
          className="max-w-full mt-8 mb-4 p-2 md:w-4/6 mx-auto border-2 border-gray-400 rounded-md"
          type="text"
          id="code"
        />
        <button className="md:text-lg border-0 bg-green-500 hover:bg-green-800 py-2 px-6 md:px-10 transition-colors hover:text-gray-100 mx-auto rounded-md">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Authorization;
