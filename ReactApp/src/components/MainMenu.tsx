import { Menu, Container, Image, List, Segment, Grid } from 'semantic-ui-react';

export default () =>
  <Menu className='mainMenu'>
    <Container>
      <Menu.Item header as='h1'>
        <Image src={require('./logo.png')} spaced size='tiny' />
        Травматолог.уз
      </Menu.Item>
    </Container>
  </Menu>
