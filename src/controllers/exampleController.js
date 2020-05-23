import getProfileGithubService from '../services/examples/getProfileGithubService';
import { AppError } from '../errors';

class ExampleController {
  async index(req, res) {
    const { user } = req.query;

    if (!user) {
      throw new AppError('Missing params github username', 400);
    }

    const githubProfile = await getProfileGithubService(user);
    return res.json(githubProfile);
  }
}

export default new ExampleController();
