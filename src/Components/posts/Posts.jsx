// Posts.jsx

import Post from './Post'

const postInfo = [

    {
        id: 1,
        title: 'Tacos vs. Fried Chicken'
    },
    {
        id: 2,
        title: 'Whiny Gen-Z'
    },
    {
        id: 3,
        title: "I don't know"
    }
]

export default function Posts () {

    return (
        <div className='posts'>
            <h3 className='posts__header'>Posts</h3>
            {postInfo.map(post => {
               return <Post key={post.id} post={post}/>
            })}
        </div>
    )
}
