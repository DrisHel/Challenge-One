import Joi from "joi";

export  = async (req, res, next) => {  
  try {
    const entitie = Joi.object({
      city: Joi.string().min(4).max(30).required(),
      state:Joi.string().required().valid(
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'

      )
    });

    const { error } = await entitie.validate(req.body, { abortEarly: false });
    if (error) throw error
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }

}
