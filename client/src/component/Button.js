import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const className = (
        'uk-button button-component'
        + (props.type ? ' uk-button-' + props.type : ' uk-button-default')
        + (props.color ? ' button-' + props.color + ' ' : '')
        + (props.borderColor ? 'button-border-' + props.borderColor + ' ' : '')
        + (props.backgroundColor ? 'button-background-' + props.backgroundColor + ' ' : '')
        + (props.textColor ? ' button-text-' + props.textColor + ' ' : '')
        + (props.className ? ' ' + props.className : '')
    );

    return (
        <button
            className={ className }
            type={ props.type || 'button' }
            disabled={ props.disabled }
            hidden={ props.hidden }
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    );
};

Button.propTypes = {
    type:        PropTypes.string,
    color:       PropTypes.string,
    borderColor: PropTypes.string,
    textColor:   PropTypes.string,
    className:   PropTypes.string,
    disabled:    PropTypes.bool,
    hidden:      PropTypes.bool,
    onClick:     PropTypes.func
};

export default Button;