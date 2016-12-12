import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index',{
    title: 'Dashboard de CMS'
  });
});

export default router;
