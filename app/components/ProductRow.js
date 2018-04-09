import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import {deleteNoteRequest, deleteNoteSuccess, deleteNoteError} from '../actions/index';
import { deleteNote } from '../services';

import { note, noteHeader, noteBody, deleteButton } from '../styles/note.scss';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDeleteClick = (event) => {
        console.log('handleDeleteClick', this.props);
        this.props.deleteNote(this.props.data._id);
        this.props.refreshNotesList();
        event.preventDefault();
    }

    render() {
        return (
            <div className={note}>
                <div className={noteHeader}>
                    <span>
                        {this.props.data.title}
                    </span>
                    <a href="#" className={deleteButton}
                    onClick={this.handleDeleteClick}>Delete</a>
                </div>
                <div className={noteBody}>{this.props.data.text}</div>
            </div>
        );
    }
}

ProductRow.propTypes = {
    data: PropTypes.object,
    deleteNote: PropTypes.func.isRequired,
    refreshNotesList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => {
            dispatch(deleteNoteRequest());
            return deleteNote(noteId).then((response) => {
                if (response) {
                    dispatch(deleteNoteSuccess(response));
                } else {
                    dispatch(deleteNoteError());
                }
            });
        },
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ProductRow);
