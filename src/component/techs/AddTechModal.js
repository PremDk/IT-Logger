import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [tech, setTech] = useState({
    firstName: '',
    lastName: '',
  });

  const { firstName, lastName } = tech;
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter firstname and lastname' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });
      setTech({
        firstName: '',
        lastName: '',
      });
    }
  };
  return (
    <div>
      <div id='add-tech-modal' className='modal'>
        <div className='modal-content'>
          <h4>New Technician</h4>
          <div className='row'>
            <div className='input-field'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={(e) =>
                  setTech({
                    ...tech,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={(e) =>
                  setTech({
                    ...tech,
                    lastName: e.target.value,
                  })
                }
              />
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
