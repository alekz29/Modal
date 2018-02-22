import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import connect from "react-redux/es/connect/connect";
import ModalDate from './Modal'


class ControlModal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.openControl(true)
    }

    render() {
        const active = this.props.active;
        const close = this.props.close
        return (

            <div>
                <RaisedButton label="Date Control"
                              onClick={() => {
                                  this.handleChange()
                              }}
                />
                {
                    active === true && close === null ? <ModalDate/> : null
                }
            </div>

        );
    }
}

export default connect(
    state => ({
        active: state.show,
        close: state.date
    }),
    dispatch => ({
        openControl: (show) => dispatch({type: "OPEN", payload: show})
    })
)(ControlModal)