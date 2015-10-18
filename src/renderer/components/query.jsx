import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/sql';
import 'brace/theme/github';

const STYLES = {
  queryBox: {
  },
  resultBox: {
    background: '#ececec',
  },
};

export default class DatabaseList extends Component {
  static propTypes = {
    query: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  onExecQueryClick() {
    const { actions } = this.props;
    const sql = React.findDOMNode(this.refs.queryBoxTextarea).value;
    actions.executeQuery(sql);
  }

  onSQLChange(newValue) {
    const { actions } = this.props;
    actions.updateSQL(newValue);
  }

  onDiscQueryClick() {
    React.findDOMNode(this.refs.queryBoxTextarea).value = '';
  }

  buildQueryResult(query) {
    if (query.error) {
      return <pre>{JSON.stringify(query.error, null, 2)}</pre>;
    }

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            {Object.keys((query.rows[0] || {})).map(name => {
              return <th>{name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {query.rows.map(row => {
            return (<tr>
              {Object.keys(row).map(name => {
                return <td>{row[name]}</td>;
              })}
            </tr>);
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { query } = this.props;
    return (
      <div>
        <div>
          <div style={STYLES.queryBox}>
            <div className="ui segment">
              <AceEditor
                mode="sql"
                theme="github"
                name="querybox"
                showGutter={false}
                height="10em"
                width="100%"
                ref="queryBoxTextarea"
                value={query && query.sql}
                onChange={::this.onSQLChange}
                />
            </div>
            <div className="ui secondary menu" style={{marginTop: 0}}>
              <div className="right menu">
                <div className="item">
                  <div className="ui buttons">
                    <button className="ui positive button" onClick={::this.onExecQueryClick}>Execute</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={::this.onDiscQueryClick}>Discard</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={STYLES.resultBox}>
          {::this.buildQueryResult(query)}
        </div>
      </div>
    );
  }
}
