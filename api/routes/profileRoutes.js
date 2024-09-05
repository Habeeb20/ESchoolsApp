import express from 'express';
import User from '../model/user.js';
import auth from '../middlewares/auth1.js';

const router = express.Router();

router.get('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { name, educationalBackground, school, degree, dob, workExperience, address, courseStudied } = req.body;
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.name = name || user.name;
    user.educationalBackground = educationalBackground || user.educationalBackground;
    user.school = school || user.school;
    user.degree = degree || user.degree;
    user.dob = dob || user.dob;
    user.workExperience = workExperience || user.workExperience;
    user.address = address || user.address;
    user.courseStudied = courseStudied || user.courseStudied;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
