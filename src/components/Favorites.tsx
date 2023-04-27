import { posts } from "../db/posts";
import "../css/home.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllFavoritesSelector } from "../redux/posts.selectors";
import { delFromFavor } from "../redux/posts.slice";

function Favorites() {
  const dispatch = useAppDispatch();
  const favor_Ids = useAppSelector(getAllFavoritesSelector);

  return (
    <div className="home-main">
      <p>Favorites</p>
      <div className="posts-container">
        {posts.map(
          (post, i) =>
            favor_Ids.includes(post.id) && (
              <div key={"fav-" + i} className="post">
                <div className="post-header">
                  <p className="author">
                    Author: <span className="author-name">{post.author}</span>
                  </p>
                  <div className="fav-btn">
                    <button onClick={() => dispatch(delFromFavor(post.id))}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="content">{post.content}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Favorites;
