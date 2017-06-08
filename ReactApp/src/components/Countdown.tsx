import React from 'react';
import TNumber from 'react-transitive-number';
import { Statistic, Segment, Message, Icon, Header, Container } from 'semantic-ui-react';


interface IProps {
  startDateTime?: Date;
}

export default class Countdown extends React.PureComponent<IProps, {}> {

  static defaultProps = {
    startDateTime: new Date('2019-09-01 9:00')
  }

  private timer;

  state = {
    n: 1000
  };

  componentWillMount() {
    this.timer = window.setInterval(() => {
      this.setState({ n: this.state.n - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    return (
      <div>
        <Header as='h1'>
          <Icon name='calendar' />
          Ишга тушиш санаси: &nbsp;
          {this.props.startDateTime.toLocaleString()}
        </Header>
        <Container text textAlign='center' fluid>
          <Statistic.Group as='span'>
            <Statistic value='883' label='кун' />
            <Statistic value='04' label='соат' />
            <Statistic value='28' label='минут' />
            <Statistic value={<TNumber>{this.state.n}</TNumber>} label='секунд' />
          </Statistic.Group>
        </Container>
      </div >
    );
  }
}
