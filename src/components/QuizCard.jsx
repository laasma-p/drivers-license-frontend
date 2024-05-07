import image from "../assets/view.jpg";

const QuizCard = () => {
  return (
    <div className="w-11/12 mt-3">
      <div>
        <img src={image} alt="image" height="auto" />
      </div>
      <form>
        <div>
          <h2 className="text-xl px-2 pt-1 pb-2">Question</h2>
          <div className="flex flex-col gap-1">
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement1"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <label htmlFor="statement1">Statement 1</label>
            </div>
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement2"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <label htmlFor="statement2">Statement 2</label>
            </div>
            <div className="text-lg px-1 flex items-center">
              <input
                type="checkbox"
                id="statement3"
                className="w-4 h-4 ml-1 mr-2 cursor-pointer"
              />
              <label htmlFor="statement3">Statement 3</label>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full mt-4 text-gray-100 bg-sky-400 hover:bg-sky-700 py-2 transition-colors rounded-md">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizCard;
