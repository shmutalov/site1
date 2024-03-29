import { Header, List, Container } from 'semantic-ui-react';

export default () =>
  <div>
    <Header as='h1' icon='medkit' content='Тиббий хизмат' />
    <Container >
      <div>
        Ахолига малакали амбулатор ва стационар тиббий хизмат курсатиш:
        <br />
        <List size='large'>
          <List.Item icon='checkmark' content='травматология-ортопедия' />
          <List.Item icon='checkmark' content='гинекология' />
          <List.Item icon='checkmark' content='кардиология' />
          <List.Item icon='checkmark' content='стоматология' />
          <List.Item icon='checkmark' content='Лаборатор, инструментал ва биохимик тахлиллар (50 дан ортиқ)' />
          <List.Item icon='checkmark' content='УТТ' />
          <List.Item icon='checkmark' content='Рақамли рентген текшируви' />
          <p>ва бошқалар.</p>
        </List>
      </div>
    </Container>
  </div>
