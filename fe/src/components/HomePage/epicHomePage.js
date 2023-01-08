import {
    map, takeUntil, catchError, mergeMap, pluck,
  } from 'rxjs/operators';
  import { from, of } from 'rxjs';
  import { ofType } from 'redux-observable';
  import { Config } from '../../constants/Config';
  import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
  
//   async function fetchBankUserName(nik) {
//     const res = await makeGetRequest(`${Config.getBankUserName}?nik=${nik}`);
//     return res.data;
//   }
  
//   export const epicBankUserName = (action$, state$) => action$.pipe(
//     ofType(GET_BANK_USER_NAME),
//     mergeMap(() => {
//       const { bankUpdateDetailFormData } = state$.value.reducerBankDetailUpdate;
//       const { nik } = bankUpdateDetailFormData;
//       return from(fetchBankUserName(nik)).pipe(
//         map((res) => {
//           if (!res) return errorGettingBankUserName('');
//           return gotBankUserName(res);
//         }),
//         takeUntil(action$.pipe(ofType(GET_BANK_USER_NAME))),
//         catchError((error) => {
//           return of(errorGettingBankUserName(error?.response?.data?.message || ''));
//         }),
//       );
//     }),
//   );