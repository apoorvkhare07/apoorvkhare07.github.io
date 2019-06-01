import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import { BETA_FEATURE } from '../../../data/Crypto';
import { BetaSectionWrapper, FeatureSection } from './betaSection.style';

const BetaSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <BetaSectionWrapper id="betasection">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="BetaSection">
          <FeatureSection>
            {BETA_FEATURE.map((item, index) => (
              <Fade up>
                <div key={`feature-${index}`} className="featureWrapper">
                  <Image src={item.image} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />

                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>
              </Fade>
            ))}
          </FeatureSection>
        </Box>
      </Container>
    </BetaSectionWrapper>
  );
};

// Transactions style props
BetaSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
BetaSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    flexBox: true,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  title: {
    content: 'About Us',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content: 'We are a seed-funded RegTech (Regulatory Technology) company backed by SeedPlus, SGInnovate, the Singaporean government’s innovation arm and Entrepreneur First, the world’s leading accelerator and we have developed ​MICA,​ which stands for My Intelligence Compliance Assistant.  Today, MICA already helps our clients track, understand and act on regulatory changes more effectively than they ever did before.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default BetaSection;
