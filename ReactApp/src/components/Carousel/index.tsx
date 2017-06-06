import { Segment, Label, Icon, Embed } from 'semantic-ui-react';
import Slider from 'react-slick';
import _ from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default () =>
  <Segment padded='very'>
    <Label attached='top' color='violet'>
      <Icon name='photo' />
      3D макетлар
      </Label>
    <Slider dots slidesToShow={2} slidesToScroll={1} infinite autoplay autoplaySpeed={2000} arrows>
      {_.range(1, 7).map(i =>
        <img key={'i' + i} src={require(`./${i}.jpg`)} />
      )}
      {_.range(1, 3).map(i =>
        <video controls>
          <source src={require(`./v${i}.mp4`)} type='video/mp4' />
        </video>
      )}
    </Slider>
  </Segment>
