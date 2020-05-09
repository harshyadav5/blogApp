import React, { Component } from 'react';

/*this HOC component is used to implment Lazy Loading / (optimise the size of bundle.js file
because using this compnent only those file will be import need for that
component rendering)*/

const asyncComponent = (importComponent) => {
    return class extends Component{
        state = {
            component: null
        }
        componentDidMount(){
            importComponent()
            .then(cmp => {
                this.setState({component: cmp.default});
            });
        }
        render(){
            const C = this.state.component;

            return C ? <C {...this.props} />: null;
        }
    }

}

export default asyncComponent;