import { axios } from './base.service';

export function registerUser(payload) {
  return axios({
    url: '/api/auth/local/register',
    method: 'post',
    data: payload,
    headers: {
      Authorization: null,
    },
  });
}

export function login(payload) {
  return axios({
    url: '/api/auth/local',
    method: 'post',
    data: payload,
  });
}

export function changePassword(payload) {
  return axios({
    url: '/api/auth/change-password',
    method: 'post',
    data: payload,
  });
}

export function getCurrentUserInfo() {
  return axios({
    url: `/api/users/me`,
    params: { populate: 'role' },
  });
}

export function getUserInfo({ userId }) {
  return axios({
    url: `/api/users/${userId}`,
  });
}

export function updateUser({ user }) {
  return axios({
    url: `/api/users/${user.id}`,
    method: 'put',
    data: user,
  });
}

export function updateUserRole({ userId, role }) {
  return axios({
    url: `/api/users/${userId}`,
    method: 'put',
    data: { role },
  });
}
