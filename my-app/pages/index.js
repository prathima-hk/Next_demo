import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) {
  return (
    <div>
      <h1>Welcome to Next JS</h1>
      {
        posts.map((post) => {
          return (
            <div key={post.id}>
             <Link href={`/${post.id}`}>
              <h5>
                {post.id} {post.title}
              </h5>
              </Link>
            </div>
          )})
        }
        </div>
      )
      }
   



export async function getStaticProps(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data =  await resp.json()

  return {
    props : {
      posts: data.slice(0,10)
    }
  }
}
  

