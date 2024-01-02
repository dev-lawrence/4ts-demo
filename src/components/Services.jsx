import { services } from './ServiceData';
import Card from './Card';

const Services = () => {
  return (
    <>
      <section className="services-section pt-section">
        <div className="title">
          <h2>Our Services</h2>
        </div>

        <div className="services">
          {services.map((service, index) => {
            return (
              <Card
                data={service}
                key={service.id}
                index={index}
                isService={true}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
