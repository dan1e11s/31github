import Section from '../Section/Section';

import video from '../../images/text.webm';

const MainBanner = () => {
  return (
    <Section>
      <div className="container">
        <h1>Oxxxymiron</h1>
        <div className="banner">
          <video
            className="banner-video"
            width={1000}
            height="auto"
            loop
            muted
            autoPlay
          >
            <source src={video} type="video/webm" />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default MainBanner;
