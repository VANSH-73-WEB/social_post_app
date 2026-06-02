import React from "react";
function FeedHeader({ isLoading, shownCount }) {
  return (
    <div className="feed-header">
      <h2>Latest posts</h2>
      <span>{isLoading ? "Syncing..." : `${shownCount} shown`}</span>
    </div>
  );
}

export default FeedHeader;
