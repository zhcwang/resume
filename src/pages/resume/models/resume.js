import * as resumeService from '../services/resume';

export default {
  namespace: 'resume',
  state: {
    info: {
            name: '',
            phone: null,
            description: '',
            wanted:[],
            photoPath:'',
          },
    experience:[],
    project:[],
    skill:{ score:[]},
  },
  effects: {
    *experience({ payload } ,  { call, put }){
      const { data } = yield call(resumeService.experience);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(resumeService.fetch);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
    *project({ payload }, { call, put }) {
      const { data } = yield call(resumeService.project);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
    *skill({ payload }, { call, put }) {
      const { data } = yield call(resumeService.skill);
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
  }
};
