import { TimerModel } from '../../models/timer.model';

export const createNewTimerEvent = async (req, res) => {
  try {
    const response = await TimerModel.createNewTimerNote(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
};

export const getTimersByUserId = async (req, res) => {
  try {
    const response = await TimerModel.find({
      user: {
        _id: req.params.userId,
      },
    });
    return res.json(response);
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
};
