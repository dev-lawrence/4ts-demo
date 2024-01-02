import { features } from './FeatureData';
import Card from './Card';

const Features = () => {
  return (
    <>
      <section id="features" className="features-section pt-section">
        <div className="title">
          <h2>Why choose us?</h2>
          <p>Amazing features that makes 4T5 stand out from other vendors</p>
        </div>

        <div className="features">
          {features.map((feature, index) => {
            return (
              <Card
                data={feature}
                key={feature.id}
                index={index}
                isFeature={true}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
