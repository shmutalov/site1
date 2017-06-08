import { Segment, Label, Icon, Embed, Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import _ from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default () =>
  <div>
    <Header as='h1' icon='photo' content='3D макетлар' />
    <Segment basic padded='very'>
      <Slider dots slidesToShow={2} slidesToScroll={1} infinite autoplay autoplaySpeed={2000} arrows>
        {_.range(1, 7).map(i =>
          <img key={'i' + i} src={require(`./${i}.jpg`)} />
        )}
        {_.range(1, 3).map(i =>
          <video key={'v' + i} controls>
            <source src={require(`./v${i}.mp4`)} type='video/mp4' />
          </video>
        )}
      </Slider>
    </Segment>
  </div>
