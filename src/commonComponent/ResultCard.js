import propTypes from "prop-types";

export const ResultCard = ({ data, id }) => {
  const { title, description, tags, weight } = data;

  return (
    <div className="card-data">
      <div className="card-title" aria-label="title">
        <strong>{title}</strong>
      </div>
      <div className="card-content" aria-label="description">
        {description}
      </div>
      <div className="card-content" aria-label="tags">
        <span>Tags: </span>
        <ul>
          {tags?.map((tag, index) => {
            return <li key={`${id}-${index}`}>{tag}</li>;
          })}
        </ul>
      </div>
      <div className="card-content" aria-label="weight">
        <span>Weight: </span> <strong>{weight}</strong>
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  tags: propTypes.array,
  weight: propTypes.number,
};
