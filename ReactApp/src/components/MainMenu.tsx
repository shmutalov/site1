import { Menu, Container, Image, List, Segment, Grid } from 'semantic-ui-react';

export default () =>
  <Menu>
    <Container>
      <Menu.Item header as='h1' content='Травматолог.уз' />
      <Menu.Item style={{ width: '40em' }}>
        <Grid columns='sixteen'>
          <Grid.Column width={10}>
            <List>
              <List.Item>
                <Image src={require('./avatar.jpg')} width='16' shape='circular' />
                <List.Content>Турдиев Шерзод</List.Content>
              </List.Item>
              <List.Item icon='marker' content='Наманган вилоят, Мингбулок туман.' />
              <List.Item icon='phone' content='+998 (91) 281-1985' />
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <List>
              <List.Item icon='mail' content={<a href='mailto:bookmaker1985@bk.ru'>bookmaker1985@bk.ru</a>} />
              <List.Item icon='mail' content={<a href='mailto:bookmaker2013@gmail.com'>bookmaker2013@gmail.com</a>} />
              <List.Item>
                <List.Icon name='facebook' />
                <List.Content>
                  <a href='http://fb.com/travmatolog' target='_blank'>fb.com/travmatolog</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Menu.Item>
    </Container>
  </Menu>
