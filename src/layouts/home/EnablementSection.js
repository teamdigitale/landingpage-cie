import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroCategory } from '../../components/hero/HeroCategory.js';
import { HeroTitle } from '../../components/hero/HeroTitle.js';
import { HeroBody } from '../../components/hero/HeroBody.js';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer.js';
import { Cta } from '../../components/hero/Cta.js';
import { HeroGraphic } from '../../components/hero/HeroGraphic.js';
import { Hero } from '../../components/hero/Hero.js';
import content from '../../../contents/home-page/home.yml';
import links from '../../../contents/links.yml';
import labels from '../../../contents/labels.yml';

const {
  heroEnablement: { category, title, body, ctaAriaLabel, altImg },
} = content;
const {
  internalLinks: { enablement },
} = links;
const { showMore } = labels;

export const EnablementSection = () => (
  <Hero bgColor="primary">
    <div className="row align-items-center">
      <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0">
        <div className="text-center text-lg-left text-white">
          <HeroCategory title={category} />
          <HeroTitle title={title} linkTo={enablement.linkTo} className="text-white" />
          <HeroBody html={body} />
        </div>
        <HeroCtaContainer>
          <Cta text={showMore} linkTo={enablement.linkTo} color="light" aria-label={ctaAriaLabel} />
        </HeroCtaContainer>
      </div>
      <HeroGraphic className="col-lg-6 d-flex align-items-center justify-content-center">
        <StaticImage
          src="../../images/imgFake.png"
          alt={altImg}
          placeholder="blurred"
          formats={['AUTO', 'AVIF', 'WEBP']}
          imgStyle={{ borderRadius: 20 }}
        />
      </HeroGraphic>
    </div>
  </Hero>
);
