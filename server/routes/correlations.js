import express from 'express';

const router = express.Router();

router.get('/', getCorrelation);
router.post('/', createCorrelation);

export default router;