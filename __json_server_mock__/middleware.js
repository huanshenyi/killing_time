module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.email === "admin" && req.body.password === "admin") {
      return res.status(200).json({
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZWNkN2Q5MC03ZDQ3LTQzYzItOWZkOC03ZWM5MzMwMDc0ZTMiLCJ1c2VybmFtZSI6IjMzNDU2N0BxcS5jb20iLCJuYmYiOjE2NTExMDYwNTQsImV4cCI6MTY1MTE5MjQ1NCwiaXNzIjoiZmFrZXhpZWNoZW5nLmNvbSIsImF1ZCI6ImZha2V4aWVjaGVuZy5jb20iLCJpZCI6MX0.vG4qnkSAcMGhLLyah3gfCR_x6Re51iO64thPe0Ijj24",
        },
      });
    } else if (req.body.email === "12345" && req.body.password === "12345") {
      return res.status(200).json({
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZWNkN2Q5MC03ZDQ3LTQzYzItOWZkOC03ZWM5MzMwMDc0ZTMiLCJ1c2VybmFtZSI6IjEyMzQ1QHFxLmNvbSIsIm5iZiI6MTY1MTEwNjA1NCwiZXhwIjoxNjUxMTkyNDU0LCJpc3MiOiJmYWtleGllY2hlbmcuY29tIiwiYXVkIjoiZmFrZXhpZWNoZW5nLmNvbSIsImlkIjoyfQ.mwXvW4BYf3LCDr7a-FR-hmYEd_mmcsauKZSW-fKimFI",
        },
      });
    } else {
      return res.status(400).json({ message: "no!" });
    }
  }
  next();
};
