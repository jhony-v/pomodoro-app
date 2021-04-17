import { UserModel } from '../../models/user.model';

export const createNewAnonymousUser = async (req, res) => {
  try {
    const response = await UserModel.createNewAnonymousUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
