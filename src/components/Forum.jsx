import "../css/Forum.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forum() {
  const initalPost = {
    name: "MATT",
    location: "VANCOUVER CANADA",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    postedTime: new Date().toLocaleString(),
    likes: 0,
    liked: false,
  };

  const [pollOneVotes, setPollOneVotes] = useState(1000);
  const [pollTwoVotes, setPollTwoVotes] = useState(500);
  const [pollOneVoted, setPollOneVoted] = useState(false);
  const [pollTwoVoted, setPollTwoVoted] = useState(false);
  const [pollOneSelectedOption, setPollOneSelectedOption] = useState(null);
  const [pollTwoSelectedOption, setPollTwoSelectedOption] = useState(null);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const maxCharacters = 300;
  const [posts, setPosts] = useState([initalPost]);
  const remainingCharacters = maxCharacters - text.length;

  function handleTextInput(event) {
    const newText = event.target.value;

    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  }

  function handleOptionClick(optionValue, pollNumber) {
    if (pollNumber === 1) {
      setPollOneSelectedOption(optionValue);
    } else {
      setPollTwoSelectedOption(optionValue);
    }
  }

  function handlePostSubmission() {
    if (name && location && text) {
      const newPost = {
        name: name,
        location: location,
        content: text,
        postedTime: new Date().toLocaleString(), // You can format the date as needed
        likes: 0,
        liked: false,
      };

      setPosts([...posts, newPost]);
      setName("");
      setLocation("");
      setText("");

      toast.success(`Post Submitted!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(
        `Missing information! Please enter name, location, and post`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  function handleLike(index) {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      const post = { ...updatedPosts[index] };

      post.liked = !post.liked;
      post.likes = post.liked ? post.likes + 1 : post.likes - 1;
      updatedPosts[index] = post;

      return updatedPosts;
    });
  }

  function submitVote(voteSubmitted, pollNumber) {
    if (voteSubmitted) {
      toast.error(`Already voted!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (pollNumber === 1) {
      setPollOneVotes(pollOneVotes + 1);
      setPollOneVoted(true);
      toast.success(`Vote submitted for ${pollOneSelectedOption}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (pollNumber === 2) {
      setPollTwoVotes(pollTwoVotes + 1);
      setPollTwoVoted(true);
      toast.success(`Vote submitted for ${pollTwoSelectedOption}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <div className="main-content-fanzone">
        <div className="left-section-fanzone">
          <div className="left-side">
            <h2>POLL TIME</h2>
            <div className="poll">
              <h3>WHERE SHOULD WE DO OUR NEXT MEET N’ GREET</h3>

              <div className="options">
                <div
                  className={`poll-option ${
                    pollOneSelectedOption === "option1" ? "selected" : ""
                  }`}
                  data-value="option1"
                  onClick={() => handleOptionClick("option1", 1)}
                >
                  <div className="option-number">1</div>
                  <p>Option #1</p>
                </div>
                <div
                  className={`poll-option ${
                    pollOneSelectedOption === "option2" ? "selected" : ""
                  }`}
                  data-value="option2"
                  onClick={() => handleOptionClick("option2", 1)}
                >
                  <div className="option-number">2</div>
                  <p>Option #2</p>
                </div>
                <div
                  className={`poll-option ${
                    pollOneSelectedOption === "option3" ? "selected" : ""
                  }`}
                  data-value="option3"
                  onClick={() => handleOptionClick("option3", 1)}
                >
                  <div className="option-number">3</div>
                  <p>Option #3</p>
                </div>
                <div
                  className={`poll-option ${
                    pollOneSelectedOption === "option4" ? "selected" : ""
                  }`}
                  data-value="option4"
                  onClick={() => handleOptionClick("option4", 1)}
                >
                  <div className="option-number">4</div>
                  <p>Option #4</p>
                </div>
              </div>
              <div className="vote-section">
                <p>{pollOneVotes} votes</p>
                <button
                  onClick={() => {
                    submitVote(pollOneVoted, 1);
                  }}
                >
                  {pollOneVoted ? "Voted" : "Vote"}
                </button>
              </div>
            </div>
            <div className="poll">
              <h3>WHO SHOULD WIN PLAYER OF THE YEAR</h3>
              <div className="options">
                <div
                  className={`poll-option ${
                    pollTwoSelectedOption === "option1" ? "selected" : ""
                  }`}
                  data-value="option1"
                  onClick={() => handleOptionClick("option1", 2)}
                >
                  <div className="option-number">1</div>
                  <p>Option #1</p>
                </div>
                <div
                  className={`poll-option ${
                    pollTwoSelectedOption === "option2" ? "selected" : ""
                  }`}
                  data-value="option2"
                  onClick={() => handleOptionClick("option2", 2)}
                >
                  <div className="option-number">2</div>
                  <p>Option #2</p>
                </div>
                <div
                  className={`poll-option ${
                    pollTwoSelectedOption === "option3" ? "selected" : ""
                  }`}
                  data-value="option3"
                  onClick={() => handleOptionClick("option3", 2)}
                >
                  <div className="option-number">3</div>
                  <p>Option #3</p>
                </div>
                <div
                  className={`poll-option ${
                    pollTwoSelectedOption === "option4" ? "selected" : ""
                  }`}
                  data-value="option4"
                  onClick={() => handleOptionClick("option4", 2)}
                >
                  <div className="option-number">4</div>
                  <p>Option #4</p>
                </div>
              </div>
              <div className="vote-section">
                <p>{pollTwoVotes} votes</p>
                <button
                  onClick={() => {
                    submitVote(pollTwoVoted, 2);
                  }}
                >
                  {pollTwoVoted ? "Voted" : "Vote"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section-fanzone">
          <div className="right-side">
            <h2>JOIN OUR SUPPORTER CHAT</h2>
            <div className="blue-linebreak"></div>

            <div className="forum-posts">
              {posts.map((post, index) => (
                <div className="post" key={index}>
                  <div className="profile-photo">
                    <i className="fa-solid fa-user fa-2xl"></i>
                  </div>
                  <div className="post-container">
                    <div className="user-info">
                      <div>
                        {post.name}, {post.location}
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{post.content}</p>
                    </div>

                    <div className="bottom-post-section">
                      <p> {post.postedTime}</p>
                      <div className="like-section">
                        <p>Likes: {post.likes}</p>
                        <button onClick={() => handleLike(index)}>
                          {post.liked ? "Unlike" : "Like"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="submit-post-section">
              <h2>SUBMIT YOUR POST</h2>
              <div className="poster-details">
                <input
                  className="poster-input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length < 50) setName(e.target.value);
                  }}
                />
                <input
                  className="poster-input"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => {
                    if (e.target.value.length < 50) setLocation(e.target.value);
                  }}
                />
                <button className="post-submit" onClick={handlePostSubmission}>
                  Submit
                </button>
              </div>

              <div className="write-post-container">
                <textarea
                  className="post-input"
                  placeholder="Write your post here..."
                  value={text}
                  onChange={handleTextInput}
                ></textarea>
                <p>
                  {remainingCharacters}{" "}
                  {remainingCharacters === 1 ? "character" : "characters"} left
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
