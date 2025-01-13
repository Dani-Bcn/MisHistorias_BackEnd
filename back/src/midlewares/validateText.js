/* export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (errors) {
    errors.errors.map((e)=>{
            res.json({message:e.message})
    })
  }
};
 */