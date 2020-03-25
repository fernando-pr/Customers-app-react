import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from './../helpers/setPropsAsInitial'
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';
import { Component } from 'react';

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";

    }

    if (!values.dni) {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
};

const isNumber = (value) => (
    isNaN(Number(value)) && "El campo de ser un número"
);

const toNumber = (value) => (value && Number(value));
const toUpper = (value) => (value && value.toUpperCase());
const toLower = (value) => (value && value.toLowerCase());
const onlyGrow = (value, previusValues, values) => value && (!previusValues ? value : (value > previusValues ? value : previusValues));

class CustomerEdit extends Component {

    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }

    }

    renderField = ({input, meta, type, label, name, withFocus}) => (  
        <div>
            <label htmlFor={name}>{label}</label><br />
            <input 
                {...input} 
                type={!type ? 'text' : type}
                ref={withFocus && (txt => this.txt = txt) }
                />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );
    render(){
        const {  handleSubmit, submitting, onBack, pristine, submitSucceeded} = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                        <Field 
                            withFocus
                            name="name" 
                            component={this.renderField}
                            label="Nombre"
                            parse={toUpper}
                            formar={toLower}
                        ></Field>
                        <Field 
                            name="dni" 
                            component={this.renderField} 
                            type="text"
                            validate={[isNumber]}
                            label="Dni"
                        ></Field>
                        <Field 
                            name="age" 
                            component={this.renderField}
                            type="number"
                            validate={isNumber}
                            label="Edad"
                            parse={toNumber}
                            normalize={onlyGrow}
                        ></Field>
                        <CustomersActions>
                            <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                            <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                        </CustomersActions>
                        <Prompt
                            when={!pristine && !submitSucceeded}
                            message="Se Perderán los datos si continúa"
                        >  
                        </Prompt>
                    </form>
            </div>
        );
    }

}

CustomerEdit.propTypes = {
    onBack: PropTypes.func,
};

const CustomerEditForm = reduxForm(
    { 
        form : 'CustomerEdit',
        validate
    }
    )(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);