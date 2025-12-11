import { Request, Response } from 'express';
import { User } from '../models/User';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-__v').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-__v');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name, role } = req.body;
    const user = new User({ email, name, role: role || 'customer' });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

