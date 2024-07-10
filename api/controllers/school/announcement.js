import Announcement from "../../models/school/annoucement.js";

export const createAnnouncement = async(req, res, next) => {
    console.log(req.body)
    const {announcement}  = req.body;
    try {
        if(!announcement){
            throw new Error("please fill form")
        }
        await Announcement.create({announcement});
        res.status(200).json({
            success: true,
            message: 'announcement created'
        })
    } catch (error) {
        next(error)
    }
}

export const getAllAnnouncements = async (req, res, next) => {
    try {
      const announcements = await Announcement.find();
      res.status(200).json({
      success: true,
      announcements,
    }); 
    } catch (err) {
      next(err);
    }
  };
  