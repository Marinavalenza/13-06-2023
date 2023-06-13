import "./index.css";

const Card = ({ data }) => {
  return (
    <div className="Card">
      <h4 className="Card__todo">{data.todo}</h4>
      <span className="Card__details-do">❤️</span>
    </div>
  );
};

export default Card;
