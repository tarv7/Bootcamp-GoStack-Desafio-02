import Deliveryman from '../models/Deliveryman';

class DeliverymansController {
  async index(req, res) {
    const deliverymans = await Deliveryman.findAll();

    return res.json(deliverymans);
  }
}

export default new DeliverymansController();
