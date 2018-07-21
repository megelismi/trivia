import React from 'react';
import PropTypes from 'prop-types';

class SelectField extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    setValue(value, callback) {
        this.setState(
            { value },
            () => callback && callback(value, this.props.name)
        );
    }

    handleChange(e) {
        this.setValue(e.target.value, this.props.onChange)
    }

    _renderOptions() {
        return this.props.options.map(option => {
            return (
                <option
                    key={ option.value || option.label }
                    value={ option.value || option.label }
                >
                    { option.label }
                </option>
            )
        })
    }

    _renderLabel() {
        if (this.props.label) {
            return (
                <label className="uk-form-label">
                    { this.props.label }
                </label>
            )
        }

        return null;
    }

    render() {
        const className = (
            "uk-select" +
            (this.props.className ? " " + this.props.className : "")
        );

        return (
            <div className="uk-margin">
                { this._renderLabel() }

                <div className="uk-form-controls">
                    <select
                        className={ className }
                        name={ this.props.name }
                        onChange={ this.handleChange }
                    >
                        { this._renderOptions() }
                    </select>
                </div>
            </div>
        );
    }
}

SelectField.propTypes = {
    className: PropTypes.string,
    name:      PropTypes.string,
    onChange:  PropTypes.func,
    options:   PropTypes.array
};

export default SelectField;