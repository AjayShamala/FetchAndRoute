import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
class BlogItemDetails extends Component {
  state = {isLoader: true, blogsLists: {}}
  componentDidMount() {
    this.getFetchesData()
  }
  getFetchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogLists: updatedData, isLoader: false})
  }
  renderBlogItem = () => {
    const {blogsLists} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blogsLists
    return (
      <div className="bg-container">
        <p className="para">{title}</p>
        <div className="rows-container">
          <img src={avatarUrl} alt={author} className="images" />
          <p className="paras">{author}</p>
          <img src={imageUrl} alt={title} className="images1" />
          <p className="para7">{content}</p>
        </div>
      </div>
    )
  }
  render() {
    const {isLoader} = this.state
    return (
      <div className="contains">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
