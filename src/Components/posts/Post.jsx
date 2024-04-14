// Post.jsx

export default function Post ({ post }) {

    return (
        <div className='posts__post-div'>
            <h3 className='posts__title'>{post.title}</h3>
            <p className='posts__text'>Lorem Ipsum</p>
        </div>
    )
}
