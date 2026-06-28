const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use(express.json());

let reviews = [
  {
    id: 1,
    guest: "Aarav Mehta",
    room: "204",
    review:
      "The room was clean and comfortable, but hot water was not available in the morning.",
    sentiment: "Negative",
    issue: "Hot Water",
    priority: "High",
    department: "Maintenance",
    suggestedReply:
      "We are sorry for the inconvenience. Our team will check the hot water issue immediately and make sure it is fixed.",
  },
  {
    id: 2,
    guest: "Priya Sharma",
    room: "106",
    review:
      "The stay was peaceful, but room cleaning was delayed and towels were missing.",
    sentiment: "Mixed",
    issue: "Housekeeping",
    priority: "Medium",
    department: "Housekeeping",
    suggestedReply:
      "Thank you for your feedback. We will improve our housekeeping response time and ensure towels are provided on time.",
  },
  {
    id: 3,
    guest: "Rahul Verma",
    room: "301",
    review:
      "The food was good and staff was polite. The check-in process was also smooth.",
    sentiment: "Positive",
    issue: "No major issue",
    priority: "Low",
    department: "Front Desk",
    suggestedReply:
      "Thank you for your kind words. We are happy that you enjoyed your stay and hope to welcome you again.",
  },
];

let guestRequests = [
  {
    id: 1,
    room: "204",
    request: "Hot water is not coming",
    time: "10:15 AM",
    priority: "High",
  },
  {
    id: 2,
    room: "106",
    request: "Need extra towels",
    time: "11:30 AM",
    priority: "Medium",
  },
  {
    id: 3,
    room: "301",
    request: "Food delivery request",
    time: "12:05 PM",
    priority: "Low",
  },
];

let tasks = [
  {
    id: 1,
    task: "Fix hot water issue",
    room: "204",
    department: "Maintenance",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    task: "Send extra towels",
    room: "106",
    department: "Housekeeping",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    task: "Check food delivery request",
    room: "301",
    department: "Kitchen",
    status: "Completed",
    priority: "Low",
  },
  {
    id: 4,
    task: "Clean room before next check-in",
    room: "208",
    department: "Housekeeping",
    status: "Pending",
    priority: "Medium",
  },
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "StaySage backend is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is healthy",
  });
});

app.get("/api/stats", (req, res) => {
  const negativeReviews = reviews.filter(
    (review) => review.sentiment === "Negative" || review.sentiment === "Mixed"
  ).length;

  const pendingTasks = tasks.filter((task) => task.status !== "Completed").length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  res.status(200).json({
    status: "success",
    data: {
      totalReviews: reviews.length,
      negativeReviews,
      pendingTasks,
      completedTasks,
    },
  });
});

app.get("/api/reviews", (req, res) => {
  res.status(200).json({
    status: "success",
    count: reviews.length,
    data: reviews,
  });
});

app.get("/api/reviews/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      status: "fail",
      message: "Search query is required",
    });
  }

  const filteredReviews = reviews.filter((review) => {
    const searchText = `${review.guest} ${review.room} ${review.review} ${review.sentiment} ${review.issue} ${review.priority} ${review.department}`.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  res.status(200).json({
    status: "success",
    count: filteredReviews.length,
    data: filteredReviews,
  });
});

app.get("/api/reviews/:id", (req, res) => {
  const id = Number(req.params.id);
  const review = reviews.find((item) => item.id === id);

  if (!review) {
    return res.status(404).json({
      status: "fail",
      message: "Review not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: review,
  });
});

app.post("/api/reviews", (req, res) => {
  const { guest, room, review, sentiment, issue, priority, department } = req.body;

  if (!guest || !room || !review) {
    return res.status(400).json({
      status: "fail",
      message: "Guest name, room number, and review are required",
    });
  }

  const newReview = {
    id: reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1,
    guest,
    room,
    review,
    sentiment: sentiment || "Pending",
    issue: issue || "Not analysed",
    priority: priority || "Low",
    department: department || "Front Desk",
    suggestedReply:
      "Thank you for your feedback. Our team will review this and take the required action.",
  };

  reviews.push(newReview);

  res.status(201).json({
    status: "success",
    message: "Review created successfully",
    data: newReview,
  });
});

app.put("/api/reviews/:id", (req, res) => {
  const id = Number(req.params.id);
  const reviewIndex = reviews.findIndex((item) => item.id === id);

  if (reviewIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Review not found",
    });
  }

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "At least one field is required to update the review",
    });
  }

  reviews[reviewIndex] = {
    ...reviews[reviewIndex],
    ...req.body,
    id,
  };

  res.status(200).json({
    status: "success",
    message: "Review updated successfully",
    data: reviews[reviewIndex],
  });
});

app.delete("/api/reviews/:id", (req, res) => {
  const id = Number(req.params.id);
  const reviewExists = reviews.some((item) => item.id === id);

  if (!reviewExists) {
    return res.status(404).json({
      status: "fail",
      message: "Review not found",
    });
  }

  reviews = reviews.filter((item) => item.id !== id);

  res.status(204).send();
});

app.get("/api/requests", (req, res) => {
  res.status(200).json({
    status: "success",
    count: guestRequests.length,
    data: guestRequests,
  });
});

app.get("/api/tasks", (req, res) => {
  res.status(200).json({
    status: "success",
    count: tasks.length,
    data: tasks,
  });
});

app.put("/api/tasks/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const allowedStatuses = ["Pending", "In Progress", "Completed"];

  if (!status || !allowedStatuses.includes(status)) {
    return res.status(400).json({
      status: "fail",
      message: "Valid status is required: Pending, In Progress, or Completed",
    });
  }

  const taskIndex = tasks.findIndex((item) => item.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Task not found",
    });
  }

  tasks[taskIndex].status = status;

  res.status(200).json({
    status: "success",
    message: "Task status updated successfully",
    data: tasks[taskIndex],
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "API route not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Something went wrong on the server",
  });
});

app.listen(PORT, () => {
  console.log(`StaySage backend running on port ${PORT}`);
});