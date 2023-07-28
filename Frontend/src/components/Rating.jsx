import {FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'

const Rating = ({value,text,color}) => {
  return (
    <div className='rating'>
    {/* 1 star */}
      <span>
        {value>=1?<FaStar/>:value>=0.5?<FaStarHalfAlt/>:<FaRegStar/>}
      </span>
    {/* 2 star */}

      <span>
        {value>=2?<FaStar/>:value>=1.5?<FaStarHalfAlt/>:<FaRegStar/>}
      </span>
       {/* 3 star */}

       <span>
        {value>=3?<FaStar/>:value>=2.5?<FaStarHalfAlt/>:<FaRegStar/>}
      </span>
       {/* 4 star */}

       <span>
        {value>=4?<FaStar/>:value>=3.5?<FaStarHalfAlt/>:<FaRegStar/>}
      </span>
       {/* 5 star */}

       <span>
        {value>=5?<FaStar/>:value>=4.5?<FaStarHalfAlt/>:<FaRegStar/>}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825',
  };

export default Rating;
