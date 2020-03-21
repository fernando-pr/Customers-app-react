import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import AppFrame from '../components/AppFrame';
import { fetchCustomers } from '../actions/fetchCustomers';
import PropTypes from 'prop-types';
import { getCustomers } from '../selectors/customers';


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
                    body={this.renderBody(this.props.customers)}>    
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers : []
};

const mapsStateToProps = state => ({
    customers: getCustomers(state),
});

export default withRouter(
    connect(mapsStateToProps, {fetchCustomers})(CustomersContainer));