import { features } from './FeatureData';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <>
      <section className="features-section pt-section">
        <div className="title">
          <h2>Why choose us?</h2>
          <p>Amazing features that makes 4T5 stand out from other vendors</p>
        </div>

        <div className="features">
          {features.map((feature) => {
            return <FeatureCard feature={feature} key={feature.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
