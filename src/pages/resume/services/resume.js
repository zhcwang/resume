import request from '../../../utils/request';

export function fetch() {
  return request(`/api/resume`);
}

export function experience() {
  return request(`/api/experience`);
}

export function project() {
  return request(`/api/project`);
}

export function skill() {
  return request(`/api/skill`);
}

