import axios from 'axios';

export const getGithubUser = async (username) => {
  return (await axios.get(`https://api.github.com/users/${username}`)).data
};
