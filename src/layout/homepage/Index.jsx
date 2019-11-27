import React, { useState, useEffect } from 'react';

// external dependencies
//
import VisibilitySensor from 'react-visibility-sensor';
import { Spring } from 'react-spring/renderprops';

// internal dependencies
//
import Button from 'components/button';
import HomepageCode from 'components/homepage-code';

const Homepage = (props) => {
  const { setContactModal } = props;

  // transition
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, [isVisible]);

  return (
    <>
      <div className="homepage">
        <div className="homepage__section-bg main-yellow">
          <div className="homepage__section">
            <Spring
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0px)' : 'translateY(-30px)',
              }}
            >
              {(props) => (
                <div className="homepage__headline-text" style={{ ...props }}>
                  <h1>Custom web solutions tailored to your needs.</h1>
                  <p>
                    I build fully featured web applications using the latest
                    technologies and frameworks available on the market. I offer
                    a great degree of customizeability, efficiency, and ease of
                    use.
                  </p>
                  <Button
                    text="Get In Touch"
                    onClick={() => setContactModal(true)}
                  />
                </div>
              )}
            </Spring>

            <Spring
              delay={200}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0px)' : 'translateY(-30px)',
              }}
            >
              {(props) => (
                <div className="homepage__headline-code" style={{ ...props }}>
                  <HomepageCode />
                </div>
              )}
            </Spring>
          </div>
        </div>
      </div>

      <div className="homepage__section-bg dark-gray">
        <div className="homepage__section ">
          <div className="homepage__schedule-call">
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={300}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0px)'
                      : 'translateY(-30px)',
                  }}
                >
                  {(props) => (
                    <h1 style={{ ...props }}>
                      Schedule a free consultation call
                    </h1>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={400}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0px)'
                      : 'translateY(-30px)',
                  }}
                >
                  {(props) => (
                    <Button
                      secondary
                      text="Schedule a Call"
                      onClick={() => setContactModal(true)}
                      style={{ ...props }}
                    />
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
