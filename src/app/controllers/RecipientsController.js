import Recipient from '../models/Recipient';

class RecipientsController {
  async store(req, res) {
    const { name, street, number, complement, state, city, cep } = req.body;

    const recipient = await Recipient.create({
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });

    return res.json(recipient);
  }
}

export default new RecipientsController();
