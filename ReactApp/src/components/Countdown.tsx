import React from 'react';
import TNumber from 'react-transitive-number';
import { Statistic, Segment, Message, Icon, Container } from 'semantic-ui-react';


interface IProps {
  startDateTime?: Date;
}

export default class Countdown extends React.PureComponent<IProps, {}> {

  static defaultProps = {
    startDateTime: new Date('2018-05-22 10:00')
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

        <Segment attached='top'>
          <Container textAlign='center' fluid>
            <Statistic.Group>
              <Statistic value='883' label='кун' />
              <Statistic value='04' label='соат' />
              <Statistic value='28' label='минут' />
              <Statistic value={<TNumber>{this.state.n}</TNumber>} label='секунд' />
            </Statistic.Group>
          </Container>
        </Segment>
        <Message attached='bottom' >
          <Icon name='calendar' />
          Ишга тушиш санаси: &nbsp;
             <strong>
            {this.props.startDateTime.toLocaleString()}
          </strong>
        </Message>

      </div >
    );
  }
}
