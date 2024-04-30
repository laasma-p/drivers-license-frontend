import image from "../assets/view.jpg";

const QuizCard = () => {
  return (
    <div className="flex w-11/12">
      <div className="w-1/2">
        <img src={image} alt="image" width="700px" height="auto" />
      </div>
      <div className="w-1/2 h-full">
        <form className="p-4 h-full">
          <div className="h-4/5">
            <h2 className="text-xl">A question</h2>
            <h3 className="text-lg pb-2">Statement 1</h3>
            <div className="flex flex-row justify-between pb-3">
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">Yes</label>
              </div>
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">No</label>
              </div>
            </div>
            <h3 className="text-lg pb-2">Statement 2</h3>
            <div className="flex flex-row justify-between pb-3">
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">Yes</label>
              </div>
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">No</label>
              </div>
            </div>
            <h3 className="text-lg pb-2">Statement 3</h3>
            <div className="flex flex-row justify-between pb-3">
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">Yes</label>
              </div>
              <div className="w-1/2 flex flex-row">
                <input type="radio" />
                <label className="p-2">No</label>
              </div>
            </div>
          </div>
          <div className="w-full h-1/5 flex justify-end items-end">
            <button className="h-10 text-md sm:text-lg border-0 bg-sky-400 hover:bg-sky-700 transition-colors hover:text-gray-100 rounded-md px-6">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizCard;
