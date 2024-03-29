import { Link } from 'react-router-dom'
import img from '../../assets/not-found2.svg'
import Wrapper from '../Error/ErrorPageStyle.js'
const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
<div>
  <img src={img} alt='not found'/>
  <h3>Ohh! page not found</h3>
  <p>We can't seem to find the page you are looking for</p>
  <Link to='/'>Back Home</Link>
</div>
    </Wrapper>
  )
}

export default ErrorPage