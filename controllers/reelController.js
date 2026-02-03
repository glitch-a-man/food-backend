const Reel = require('../models/Reel');

// @desc    Get all reels
// @route   GET /api/reels
// @access  Public
exports.getReels = async (req, res, next) => {
    try {
        const reels = await Reel.find().populate({
            path: 'menuItemId',
            populate: {
                path: 'restaurant',
                select: 'name address'
            }
        });

        res.status(200).json({
            success: true,
            count: reels.length,
            data: reels
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
