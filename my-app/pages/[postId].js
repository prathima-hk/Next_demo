
function Post({post}) {
    return (
        <div>
            <h2>
                 {post.title}
            </h2>
            <p>{post.body}</p>
        </div>
    )
}


export default Post



export async function getStaticPaths() {
  return {
    paths : [
      {
        params : { postId : '1'},
      },
      {
        params : { postId : '2'},
      },
      {
        params : { postId : '3'},
      }
    ],
    fallback: false,
  }
}


export async function getStaticProps(context){
    const {params} = context
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data =  await resp.json()
  
    return {
      props : {
        post: data
      }
    }
  }