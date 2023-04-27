import { posts } from "../db/posts";
import "../css/home.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllFavoritesSelector } from "../redux/posts.selectors";
import { addToFavor } from "../redux/posts.slice";

function Home() {
  const dispatch = useAppDispatch();
  const favor_Ids = useAppSelector(getAllFavoritesSelector);

  return (
    <div className="home-main">
      <p>Home</p>
      <div className="posts-container">
        {posts.map((post, i) => (
          <div key={"post" + i} className="post">
            <div className="post-header">
              <p className="author">
                Author: <span className="author-name">{post.author}</span>
              </p>
              <div className="fav-btn">
                {!favor_Ids.includes(post.id) && (
                  <button onClick={() => dispatch(addToFavor(post.id))}>
                    Add
                  </button>
                )}
              </div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
