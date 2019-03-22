import * as resumeService from '../services/resume';

export default {
  namespace: 'resume',
  state: {
    info: {
            name: '',
            phone: null,
            description: '',
            wanted:'',
            photoPath:'',
          },
  },
  effects: {
    *fetch({ payload: { page = 'info' } }, { call, put }) {
      const { data } = yield call(resumeService.fetch);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
  },
  reducers: {
    save(state, { payload: { data } }) {
      return { ...state, ...data};
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/resume') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
