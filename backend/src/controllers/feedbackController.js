import asyncHandler from "express-async-handler";
import Feedback from "../models/Feedback.js";

export const createFeedback = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    res.status(400);
    throw new Error(
      "Please fill out both your rating and comment before submitting"
    );
  }

  const feedback = new Feedback({ rating, comment });
  const createdFeedback = await feedback.save();

  res.status(201).json({
    message: "Thank you for your feedback!",
    feedback: createdFeedback,
  });
});

export const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
  res.json(feedbacks);
});
