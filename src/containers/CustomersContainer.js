import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import AppFrame from '../components/AppFrame';
import { fetchCustomers } from '../actions/fetchCustomers';
import PropTypes from 'prop-types';

const customers = [
    {
        "dni"  : "27000000",
        "name" : "Juan Perez",
        "age"  : 37
    },
    {
        "dni"  : "30000000",
        "name" : "Manolito",
        "age"  : 35
    },
    {
        "dni"  : "26000000",
        "name" : "Pepe nombre",
        "age"  : 18
    },
];

class CustomersContainer extends Component {

    componentDidMount = () => {
        this.props.fetchCustomers();
    }

    handleAndNew = () => {
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>        
            <CustomerList 
                customers={customers}
                urlPath={'customers/'} >
            </CustomerList>
            <CustomersActions>
                <button onClick={this.handleAndNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>    
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers()),
});

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));