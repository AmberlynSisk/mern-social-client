import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6282ffabbf47786eb1a00d91");
      console.log(res.data);
      setPosts(res.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
            <Post key={p._id} post={p} />
          ))}
      </div>
    </div>
  )
}

export default Feed