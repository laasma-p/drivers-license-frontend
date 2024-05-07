import image from "../assets/view.jpg";

const QuizCard = () => {
  return (
    <div className="w-11/12 mt-3 md:flex max-w-7xl">
      <div className="md:w-1/2">
        <img src={image} alt="image" height="auto" />
      </div>
      <form className="md:w-1/2">
        <div className="md:h-4/5">
          <h2 className="text-xl px-2 pt-1 pb-2">Question</h2>
          <div className="flex flex-col gap-1">
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement1"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <div className="w-fit">
                <label htmlFor="statement1">Statement 1</label>
              </div>
            </div>
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement2"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <div className="w-fit">
                <label htmlFor="statement2">Statement 2</label>
              </div>
            </div>
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement3"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <div className="w-fit">
                <label htmlFor="statement3">Statement 3</label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-end md:h-1/5 md:items-end mt-4 md:mt-0">
          <button className="w-full md:w-1/5 text-lg text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-all rounded-md">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizCard;
