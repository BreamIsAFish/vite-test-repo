import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()
  console.log('Test 2')

  useEffect(() => {
    return () => console.log('cleaned up')
  }, [])

  const a = () => {
    navigate('/vid')
  }

  // DO some shit
  return <span onClick={a}>next</span>
  // return <Link to="/1">Next</Link>;
  // return <Link to="/1">Next</Link>;
}

export default Test
