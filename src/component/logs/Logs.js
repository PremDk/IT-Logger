import React, { useEffect } from 'react';
import PreLoader from '../layout/PreLoader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../actions/logActions';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <div className='container'>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show..</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    log: state.log,
  };
};

export default connect(mapStateToProps, { getLogs })(Logs);
