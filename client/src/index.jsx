import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'views/App';

const renderComponent = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
        document.getElementById( 'root' )
    );
};

renderComponent( App );

// Hot Module Replacement API
if ( module.hot ) {
    module.hot.accept( './views/App', () => {
        renderComponent( App, window.Dialed.widgetKey );
    });
}
