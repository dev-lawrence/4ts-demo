const Card = ({ data, index, isFeature, isService }) => {
  const { img, title, text } = data;
  const isOdd = index % 2 === 1;
  const isEven = index % 2 === 0;

  return (
    <>
      {isFeature && (
        <div className={`card ${isOdd ? 'odd' : ''} `}>
          <img src={img} alt="" />
          <h3 className="card-title">{title}</h3>

          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      )}

      {isService && (
        <div className={`card ${isEven ? 'even' : ''} `}>
          <img src={img} alt="" />
          <h3 className="card-title">{title}</h3>

          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
