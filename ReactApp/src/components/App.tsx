import { Container, Divider } from 'semantic-ui-react';
import { Sticky, StickyContainer } from 'react-sticky';

import MainMenu from './MainMenu';
import Carousel from './Carousel';
import Countdown from './Countdown';
import Services from './Services';

export default () =>
  <StickyContainer>
    <Sticky topOffset={80}>
      {({ style }) =>
        <header style={style}>
          <MainMenu />
        </header>
      }
    </Sticky>
    <main>
      <section>
        <Container>
          <Carousel />
        </Container>
      </section>
      <section className='alter'>
        <Container>
          <Countdown />
        </Container>
      </section>
      <section>
        <Container>
          <Services />
        </Container>
      </section>
      <section>
        <div style={{ height: '20em' }}></div>
      </section>

    </main>
  </StickyContainer>
