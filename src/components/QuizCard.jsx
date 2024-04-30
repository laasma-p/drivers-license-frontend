import image from "../assets/view.jpg";

const QuizCard = () => {
  return (
    <div>
      <img src={image} alt="image" width="700px" height="auto" />
      <form>
        <h2>A question</h2>
        <h3>Statement 1</h3>
        <input type="radio" />
        <label>Yes</label>
        <input type="radio" />
        <label>No</label>
        <h3>Statement 2</h3>
        <input type="radio" />
        <label>Yes</label>
        <input type="radio" />
        <label>No</label>
        <h3>Statement 3</h3>
        <input type="radio" />
        <label>Yes</label>
        <input type="radio" />
        <label>No</label>
        <button>Next</button>
      </form>
    </div>
  );
};

export default QuizCard;
