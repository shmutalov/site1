import React from 'react';
import TNumber from 'react-transitive-number';
import { Statistic, Segment, Message, Icon, Header, Container } from 'semantic-ui-react';


interface IProps {
  startDateTime?: Date;
}

interface IState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default class Countdown extends React.PureComponent<IProps, IState> {

  static defaultProps = {
    startDateTime: new Date('2019-09-01 9:00')
  }

  private timer;

  constructor(props) {
    super(props);

    let diff = (this.props.startDateTime.valueOf() - Date.now()) / 1000;
    const seconds = Math.floor(diff % 60);
    diff /= 60;

    const minutes = Math.floor(diff % 60);
    diff /= 60;

    const hours = Math.floor(diff % 24);
    diff /= 24;

    this.state = {
      days: Math.floor(diff),
      hours,
      minutes,
      seconds
    };
  }

  componentWillMount() {
    this.timer = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  private tick = () => {
    let { seconds, minutes, hours, days } = this.state;
    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
      return;
    }

    if (minutes > 0) {
      this.setState({ seconds: 59, minutes: minutes - 1 });
      return;
    }

    if (hours > 0) {
      this.setState({ seconds: 59, minutes: 59, hours: hours - 1 });
      return;
    }

    if (days > 0) {
      this.setState({ seconds: 59, minutes: 59, hours: 23, days: days - 1 });
      return;
    }

    this.setState({ seconds: 0, minutes: 0, hours: 0, days: 0 });
  }

  private statistic(value: number, label: string) {
    return <Statistic value={<TNumber>{value < 10 ? '0' + value : value}</TNumber>} label={label} />;
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <Header as='h1'>
          <Icon name='calendar' />
          Ишга тушиш санаси: &nbsp;
          {this.props.startDateTime.toLocaleString()}
        </Header>
        <Container textAlign='center'>
          <Statistic.Group className='inline'>
            {this.statistic(days, 'кун')}
            {this.statistic(hours, 'соат')}
            {this.statistic(minutes, 'минут')}
            {this.statistic(seconds, 'секунд')}
          </Statistic.Group>
        </Container>
        <p>
          * Ишчи уринлар сони 30. Клиника курилиши учун кузда тутилган маблаг 600 млн, тиббий жихозлаш учун кузда тутилган маблаг 400 млн.
        </p>
      </div >
    );
  }
}
