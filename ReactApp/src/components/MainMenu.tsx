import { Menu, Container, Image, List, Grid } from 'semantic-ui-react';

export default () =>
  <Menu>
    <Container>
      <Menu.Item header>Травматолог.уз</Menu.Item>
      <Menu.Item>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <List >
                <List.Item>
                  <Image src={require('./avatar.jpg')} width='16' shape='circular' />
                  <List.Content>Турдиев Шерзод Муллабоевич</List.Content>
                </List.Item>
                <List.Item icon='marker' content='Наманган вилоят, Мингбулок туман.' />
                <List.Item icon='phone' content='+998 (91) 281-1985' />
              </List>

            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item icon='mail' content={<a href='mailto:bookmaker1985@bk.ru'>bookmaker1985@bk.ru</a>} />
                <List.Item icon='mail' content={<a href='mailto:bookmaker2013@gmail.com'>bookmaker2013@gmail.com</a>} />
                <List.Item icon='facebook f' content={<a href='http://fb.com/travmatolog'>fb.com/travmatolog</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Menu.Item>
    </Container>
  </Menu>
