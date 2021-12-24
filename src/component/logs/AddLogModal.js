import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLog } from '../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    } else {
      addLog({ message, tech, attention, date: new Date() });
      M.toast({ html: `Log added by ${tech}` });
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div>
      <div id='add-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
          <h4>Enter System Log</h4>
          <div className='row'>
            <label htmlFor='message'>
              Log Message
              <input
                type='text'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name={tech}
                value={tech}
                className='browser-default'
                onChange={(e) => setTech(e.target.value)}
              >
                <option value='' disabled>
                  Select Technician
                </option>
                <TechSelectOptions />
              </select>
            </div>
            <div className='row'>
              <div className='input-field'>
                <label>
                  <input
                    type='checkbox'
                    name='attention'
                    value={attention}
                    className='filled-in'
                    checked={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Needs attention</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect waves-effect waves-light blue btn'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '60%',
  height: '80%',
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};
export default connect(null, { addLog })(AddLogModal);
