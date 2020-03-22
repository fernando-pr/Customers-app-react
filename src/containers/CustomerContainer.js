import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { customers } from '../reducers/customers';
import { getCustomersByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

class CustomerContainer extends Component {

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} />
            }
                
        } />
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()} >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props)

});

export default connect(mapStateToProps, null)(CustomerContainer);