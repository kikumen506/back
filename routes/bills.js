const { Router } = require('express');
const { getBills, getBill, updateBill, createBill, deleteBill } = require('../controllers/bills');

const router = Router();

router.get('/', getBills);
router.get('/:id', getBill);
router.put('/:id', updateBill);
router.post('/', createBill);
router.delete('/:id', deleteBill);


module.exports = router