import express from "express";
import Announcement from "../../models/school/annoucement.js";
import { createAnnouncement, getAllAnnouncements } from "../../controllers/school/announcement.js";

const announcementrouter = express.Router();

announcementrouter.get('/announcement', getAllAnnouncements);
announcementrouter.post('/createannouncement', createAnnouncement);


export default announcementrouter;
