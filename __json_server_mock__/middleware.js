module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.email === "admin" && req.body.password === "admin") {
      return res.status(200).json({
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZWNkN2Q5MC03ZDQ3LTQzYzItOWZkOC03ZWM5MzMwMDc0ZTMiLCJ1c2VybmFtZSI6ImFkbWluIiwibmJmIjoxNjUxMTA2MDU0LCJleHAiOjE2NTExOTI0NTQsImlzcyI6ImZha2V4aWVjaGVuZy5jb20iLCJhdWQiOiJmYWtleGllY2hlbmcuY29tIiwiaWQiOjEsImljb24iOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzU4MDYwNz9zPTQwJnY9NCJ9.VGY-GYlcrcrS9AXZO3h9357allakd6kluh4pc9scXu8",
        },
      });
    } else if (req.body.email === "12345" && req.body.password === "12345") {
      return res.status(200).json({
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZWNkN2Q5MC03ZDQ3LTQzYzItOWZkOC03ZWM5MzMwMDc0ZTMiLCJ1c2VybmFtZSI6IuWxseeUsOWkqumDjiIsIm5iZiI6MTY1MTEwNjA1NCwiZXhwIjoxNjUxMTkyNDU0LCJpc3MiOiJmYWtleGllY2hlbmcuY29tIiwiYXVkIjoiZmFrZXhpZWNoZW5nLmNvbSIsImlkIjoyLCJpY29uIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzUwNzYxNT9zPTQwJnY9NCJ9.aqk35jQVyWQgtA-SSnYc6fvALe7iIS255xM4MhghGkU",
        },
      });
    } else {
      return res.status(400).json({ message: "no!" });
    }
  }
  next();
};
