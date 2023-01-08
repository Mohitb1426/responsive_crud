import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs';
import { debugLog } from '../../common/Logger';

const epics = [
 
];

const TAG = 'rootEpic: ';

const rootEpic = (action$, store$, dependencies) => combineEpics(...epics)(action$, store$, dependencies)
  .pipe(
    catchError((error, source) => {
      debugLog(TAG, error);
      return source;
    }),
  );

export default rootEpic;
