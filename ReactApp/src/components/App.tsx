import { Container, Divider } from 'semantic-ui-react';

import Carousel from './Carousel';
import Countdown from './Countdown';

export default () =>
  <div>
    <Container>
      Menu
    </Container>
    <Divider />
    <Container>
      <Carousel />
      <Countdown />
    </Container>
  </div>
