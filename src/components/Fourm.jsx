import "../css/Forum.css";

export default function Forum() {
  return (
    <>
      <div className="main-content-fanzone">
        <div className="left-section-fanzone">
          <div className="left-side">
            <h2>POLL TIME</h2>
            <div className="poll">
              <h3>WHERE SHOULD WE DO OUR NEXT MEET N’ GREET</h3>
              {/* Options for Poll 1 */}
              <div className="options">
                {/* Options for Poll 1 */}

                {/* Option 1 */}
                <div className="poll-option" data-value="option1">
                  Option 1
                </div>

                {/* Option 2 */}
                <div className="poll-option" data-value="option2">
                  Option 2
                </div>

                {/* Option 3 */}
                <div className="poll-option" data-value="option3">
                  Option 3
                </div>

                {/* Option 4 */}
                <div className="poll-option" data-value="option4">
                  Option 4
                </div>

                {/* Add two more options for Poll 1 */}
              </div>

              {/* Vote button for Poll 1 */}
              <div>
                <button>Vote</button>
              </div>
            </div>

            <div className="poll">
              <h3>WHO SHOULD WIN PLAYER OF THE YEAR</h3>
              {/* Options for Poll 1 */}
              <div className="options">
                {/* Option 1 */}
                <div className="poll-option" data-value="option1">
                  Option 1
                </div>

                {/* Option 2 */}
                <div className="poll-option" data-value="option2">
                  Option 2
                </div>

                {/* Option 3 */}
                <div className="poll-option" data-value="option3">
                  Option 3
                </div>

                {/* Option 4 */}
                <div className="poll-option" data-value="option4">
                  Option 4
                </div>

                {/* Add two more options for Poll 1 */}
              </div>

              <div className="vote-section">
                {/* Vote button for Poll 1 */}
                <p>1000 votes</p>
                <button>Vote</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-fanzone">
          {/* Right Side */}
          <div className="right-side">
            {/* Supporter Forum */}
            <h2>JOIN OUR SUPPORTER CHAT</h2>

            {/* Forum Posts */}
            <div className="forum-posts">
              {/* Post 1 */}
              <div className="post">
                <div className="profile-photo"> {/* Profile Photo */}</div>
                <div className="post-content">
                  <div className="user-info">
                    <span className="name">John Doe</span>
                    <span className="location">New York</span>
                  </div>
                  <p>Post content goes here...</p>
                  <button>Like</button>
                </div>
              </div>

              {/* Add more posts as needed */}
            </div>

            {/* Submit Your Post Section */}
            <div className="submit-post">
              <h2>SUBMIT YOUR POST</h2>
              <input type="text" placeholder="Your post..." />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
