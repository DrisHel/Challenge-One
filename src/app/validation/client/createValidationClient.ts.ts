import Joi from "joi";

export = async (req, res, next) => {  
  try {
    const Client = Joi.object({
      name: Joi.string().min(10).max(40).required(),
      gender:Joi.string().valid('F','M').required(),
      birthdate:Joi.date().required(),
      age:Joi.number().required(),
      city_id:Joi.string().uuid().required()
    });

    const { error } = await Client.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }

}
