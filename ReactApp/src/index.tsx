import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import '../scss/main.scss';

import App from './components/App';


const render = () =>
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );

render();

if (module.hot) {
  module.hot.accept();
  //module.hot.accept('./components/App', render);
}
