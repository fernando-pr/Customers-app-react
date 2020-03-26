import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
       this.props.history.push("/customers")
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Inicio"
                    body={
                        <div>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                             alt="react" />
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }
                    
                    ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    
};

export default withRouter(HomeContainer);