import {Link} from 'react-router-dom'
import './index.css'
const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <li className="list-container">
      <Link className="link-container" to={`/blogs/${id}`}>
        <div className="container">
          <img src={imageUrl} alt={`item ${id}`} className="image" />

          <div className="row-container">
            <p className="para5">{topic}</p>
            <p className="para">{title}</p>
            <div className="con">
              <img src={avatarUrl} alt={`avatar ${id}`} className="image1" />
              <p className="para2">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
