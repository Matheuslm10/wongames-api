/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { LoadingIndicatorPage } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { useModels } from '../../hooks';

import { ALink, Block, Container, P } from './components';

const HomePage = () => {
  const { isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Welcome to Won Games!</h2>
              <P>Here, you have full control of your PC gaming e-commerce. Navigate the sidebar menu for order management, adding new games, customizing your store's homepage content, adjusting email layouts that will be sent to your customers, and a range of other options. Our platform offers advanced features for store customization to meet your unique needs. Explore the freedom to shape the customer experience according to your vision and goals.</P>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 20 }}>
              <h2>Learn more</h2>
              <P>This project was part of a course focusing on creating a full e-commerce platform, including back-end and front-end development, and deployment in production.</P>
              <ALink
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/react-avancado/?couponCode=9E454F41636A280AF968"
                  target="_blank"
                >
                  Check out the course module breakdown.
                </ALink>

              <ALink
                rel="noopener noreferrer"
                href="https://github.com/React-avancado/"
                target="_blank"
              >
                Visit the course's GitHub.
              </ALink>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
