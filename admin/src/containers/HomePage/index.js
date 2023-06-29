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
              <h2 id="mainHeader">Bem-vindo a Won Games!</h2>
              <P>Ao lado você pode inserir diferentes jogos, categorias e publishers para nossa loja de jogos!</P>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 20 }}>
              <h2>Saiba mais</h2>
              <P>Esse projeto foi realizado a partir de um curso de React avançado.</P>
              <ALink
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/course/react-avancado/?couponCode=9E454F41636A280AF968"
                  target="_blank"
                >
                  Veja o planejamento de módulos do curso
                </ALink>

              <ALink
                rel="noopener noreferrer"
                href="https://github.com/React-avancado/"
                target="_blank"
              >
                Acesse o GitHub do curso
              </ALink>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
