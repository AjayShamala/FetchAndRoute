import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'
class BlogList extends Component {
  state = {blogList: [], isLoader: true}
  componentDidMount() {
    this.getFetchData()
  }
  getFetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogList: formattedData, isLoader: false})
  }
  render() {
    const {blogList, isLoader} = this.state
    return (
      <div className="card-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="contain">
            {blogList.map(each => (
              <BlogItem blogData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
