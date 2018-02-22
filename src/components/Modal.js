import React from 'react'
import {connect} from 'react-redux'
import {Modal} from 'react-bootstrap'
import DatePicker from 'material-ui/DatePicker';

class TodoModal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeDate = (event, date) => {
        this.props.confirmDate(date)
    };

    render() {
        const date = this.props.date
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Confirm The Date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DatePicker
                        hintText="Controlled Date Input"
                        value={date}
                        onChange={this.handleChangeDate}
                    />
                </Modal.Body>
            </Modal>
        )
    }
}


export default connect(
    state => ({
        date: state.date
    }),
    dispatch => ({
        confirmDate: (date) => dispatch({type: "CONFIRM", payload: date})
    })
)(TodoModal)

