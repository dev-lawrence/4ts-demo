const FeatureCard = ({ feature }) => {
  const { img, title, text } = feature;

  return (
    <>
      <div className="feature">
        <img src={img} alt="" />
        <h3 className="feature-title">{title}</h3>

        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
