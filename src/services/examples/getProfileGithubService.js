import api from '../../utils/api';
import { AppError } from '../../errors';

async function exampleGetProfileGithubService(user) {
  try {
    const response = await api.get(`https://api.github.com/users/${user}`);
    return response.data;
  } catch (err) {
    throw new AppError('Failed to access github API', 400);
  }
}

export default exampleGetProfileGithubService;
