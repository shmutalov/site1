import { Grid, List, Image, Divider, Icon, Header } from 'semantic-ui-react';

export default () =>
  <div>
    <Header as='h3' content='Алоқа' />
    <br />
    <Grid columns='equal' divided>
      <Grid.Column>
        <List>
          <List.Item>
            <Image src={require('./avatar.jpg')} width='16' shape='circular' />
            <List.Content>Турдиев Шерзод</List.Content>
          </List.Item>
          <List.Item icon='marker' content='Наманган вилоят, Мингбулоқ туман.' />
          <List.Item icon='phone' content='+998 (91) 281-1985' />
        </List>
      </Grid.Column>
      <Grid.Column>
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
    <Divider />
    <Icon name='copyright' /> 2017 Травматолог.уз
  </div>
