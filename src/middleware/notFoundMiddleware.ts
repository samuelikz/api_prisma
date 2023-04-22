import express from "express";

const router = express.Router();

router.use((req, res, next) => {
    res.status(404).render('page_error', {
        title: 'Not Found',
        error: {
          status: '404',
          message: 'The requested page was not found'
        }
    }
)})

export default router;