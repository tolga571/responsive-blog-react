import { Link } from 'react-router-dom';

// Component................
import PostAuthor from '../components/PostAuthor';

import postDetailImage from '../assets/1.jpg'

const PostDetail = () => {
  return (
    <section>
      <div className="container PostDetail-container">
        <div className="postdetail-top">
          <PostAuthor />
          <div className="post-detail-buttons">
            <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>
              Edit
            </Link>
            <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia!</h1>
        <div className='postDetail-image'>
          <img src={postDetailImage} alt="" />
        </div>
        <div className='postdetail-para'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quasi iusto tempora expedita iste repellat, corrupti eveniet error recusandae! Dolorum totam assumenda ipsum tempora quae vero nesciunt voluptate, perferendis beatae at hic aspernatur, veniam tempore ea est praesentium non eligendi blanditiis animi inventore! Saepe sunt, tempore beatae rerum provident voluptates doloribus sapiente ad? Suscipit eveniet minima corporis exercitationem impedit.          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quasi iusto tempora expedita iste repellat, corrupti eveniet error recusandae! Dolorum totam assumenda ipsum tempora quae vero nesciunt voluptate, perferendis beatae at hic aspernatur, veniam tempore ea est praesentium non eligendi blanditiis animi inventore! Saepe sunt, tempore beatae rerum provident voluptates doloribus sapiente ad? Suscipit eveniet minima corporis exercitationem impedit.          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa quasi iusto tempora expedita iste repellat, corrupti eveniet error recusandae! Dolorum totam assumenda ipsum tempora quae vero nesciunt voluptate, perferendis beatae at hic aspernatur, veniam tempore ea est praesentium non eligendi blanditiis animi inventore! Saepe sunt, tempore beatae rerum provident voluptates doloribus sapiente ad? Suscipit eveniet minima corporis exercitationem impedit.          </p>
        </div>
      </div>
    </section>
  )
}

export default PostDetail