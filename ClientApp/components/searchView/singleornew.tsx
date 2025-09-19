import * as React from 'react';
import * as _ from 'lodash';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import ensureSearch, { ISearchViewState } from './reducer';

import { Button } from 'react-bootstrap';
import CompactDocList from '../listDocuments/compactDocListView';
import DocListTableView from '../listDocuments/docListTableView';
import { ProjectModel } from '../../generated/ProjectModel';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import { push } from 'react-router-redux';
import queryString from 'query-string';

type componentProps = {
  newDocUrl: string;
  searchPagesUrl: string;
  searchResultUrl: string;
};

type ConnectedProps = ISearchViewState & {
  readonly projectList: { [key: string]: ProjectModel };
};

type ViewProps = ConnectedProps & componentProps & RouteComponentProps<any> & { dispatch };

class SingleOrNew extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch, location, newDocUrl, searchPagesUrl, searchResultUrl } = this.props;

    const values = queryString.parse(location.search);
    const { project, urllink, ...search } = values;

    dispatch(ensureSearch().initializeSettings())
      .then(() => dispatch(ensureSearch().resultsDocsList.initializeSettings()))
      .then(() => dispatch(ensureProjects().loadProjects()))
      .then(() => dispatch(ensureProjects().ensureSelectedProject(project)))
      .then(() => {
        dispatch(
          ensureSearch().updateEntireSearch(
            _.reduce(
              search,
              (result, value, key) => {
                //the 2nd parameter is fuzziness, 0 means excat match
                result[key] = [value, '0'];

                return result;
              },
              {},
            ),
          ),
        );
        return dispatch(ensureSearch().loadResults(0, 5));
      })
      .then(() => {
        const { resultsListState } = this.props;
        const { docsAsync } = resultsListState;

        if (docsAsync.result.length == 0) {
          console.log(`no match found, creating new`);
          dispatch(push(`${newDocUrl}${location.search}`));
        } else if (docsAsync.result.length == 1) {
          dispatch(push(`${searchPagesUrl}/${docsAsync.result[0].id}`));
        } else {
          dispatch(push(searchResultUrl));
        }
      });

    // .then(() => dispatch(ensureSearch().loadResults()));
  }

  render() {
    return <h3 className='text-danger_gone'> loading ...</h3>;
  }
}

export default connect<ConnectedProps, { dispatch }, componentProps>((state) => {
  const { projectListAsync } = ensureProjects().getCurrentState(state);

  return _.assign({}, ensureSearch().getCurrentState(state), {
    projectList: (projectListAsync && projectListAsync.result) || {},
  });
})(withRouter(SingleOrNew));

//export default withRouter(Connected as any);
