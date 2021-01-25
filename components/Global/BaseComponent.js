import { React, Component } from 'react';
import GlobalStyles from './GlobalStyles';
import Navigation from './Navigation';

class BaseComponent extends Component {

    render() {
        return (
            <div>
                <GlobalStyles/>
                <Navigation/>
                { this.props.children }
            </div>
        )
    }

}

export default BaseComponent;