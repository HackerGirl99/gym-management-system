import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState({
    staffLeaderboard: [],
    studentLeaderboard: [],
  }); // Initialize with empty arrays
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("weekly");

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        //const response = await fetch(`http://localhost:5000/api/v1/leaderboard/${activeTab}`)

        const response = await axios.get(
          `http://localhost:5000/api/v1/leaderboard/${activeTab}`
        );
        setLeaderboardData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(111111111111111111111)
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, [activeTab]); // Run effect whenever activeTab changes

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Gym Leaderboard</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "weekly" ? "active" : ""}`}
          onClick={() => handleTabChange("weekly")}
        >
          Weekly
        </button>
        <button
          className={`tab ${activeTab === "monthly" ? "active" : ""}`}
          onClick={() => handleTabChange("monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Staff and Student Leaderboard */}
      <div className="leaderboard-section">
        <div className="leaderboard-column">
          <h2 className="section-title">Staff Leaderboard</h2>
          <div className="top-3-leaders">
            {leaderboardData.staffLeaderboard &&
              leaderboardData.staffLeaderboard.length > 0 &&
              leaderboardData.staffLeaderboard
                .slice(0, 3)
                .map((entry, index) => (
                  <div
                    key={entry._id}
                    className={`leader-entry top-${index + 1}`}
                  >
                    <span className="rank">{index + 1}</span>
                    <span className="username">{entry.name}</span>
                    <span className="hours">
                      {activeTab === "weekly"
                        ? `${entry.totalWorkoutHoursWeekly} hours (Weekly)`
                        : `${entry.totalWorkoutHoursMonthly} hours (Monthly)`}
                    </span>
                  </div>
                ))}
          </div>
        </div>
        <div className="leaderboard-column">
          <h2 className="section-title">Student Leaderboard</h2>
          <div className="top-3-leaders">
            {leaderboardData.studentLeaderboard &&
              leaderboardData.studentLeaderboard.length > 0 &&
              leaderboardData.studentLeaderboard
                .slice(0, 3)
                .map((entry, index) => (
                  <div
                    key={entry._id}
                    className={`leader-entry top-${index + 1}`}
                  >
                    <span className="rank">{index + 1}</span>
                    <span className="username">{entry.name}</span>
                    <span className="hours">
                      {activeTab === "weekly"
                        ? `${entry.totalWorkoutHoursWeekly} hours (Weekly)`
                        : `${entry.totalWorkoutHoursMonthly} hours (Monthly)`}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
