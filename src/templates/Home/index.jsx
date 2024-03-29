import { useState, useEffect, useCallback } from 'react'
import Posts from '../../components/Posts'
import Button from '../../components/Button'
import './styles.css'
import { loadPosts } from '../../utils/load-posts'
import TextInput from '../../components/TextInput'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const noMorePosts = page + postsPerPage >= allPosts.length
  const filterPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()
    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  return (
    <section className='container'>
      <div className='search-container'>
        <TextInput searchValue={searchValue} handleChange={handleChange}/>
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}
      </div>
      {filterPosts.length > 0 && (
        <Posts posts={filterPosts} />
      )}
      {filterPosts.length === 0 && (
        <p>Não existem posts</p>
      )}
      <div className='button-container'>
        {!searchValue && (
          <Button 
            onClick={loadMorePosts} 
            text='Load more Posts' 
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  )
}

export default Home
