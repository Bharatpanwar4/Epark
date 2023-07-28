import { useParams} from "react-router-dom";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating.jsx";


const ProductPage = () => {
    const [product,setProduct]= useState({})
  const { id: productId } = useParams();

    useEffect(()=>{
  const fetchProduct  = async()=>{
   const {data} = await axios.get(`/api/products/${productId}`)
    setProduct(data)
  }
  fetchProduct()
    },[productId])


  return (
    <>
    {/* go back btn */}
      <Link className="btn btn-light  my-3" to="/">Go Back</Link>
      <Row>
      {/* image of product */}
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">

     <ListGroup.Item>
<h3>{product.name}</h3>
     </ListGroup.Item>

<ListGroup.Item>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
     </ListGroup.Item>
<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
<ListGroup.Item>Description: {product.description}</ListGroup.Item>

            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                {/* price */}
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
{/* status */}
<ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            <strong>{product.countInStock>0?'In Stock':'Out Of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
{/* add to cart button */}
<ListGroup.Item>
    <Button
    className="btn-block btn-dark w-100" 
    type="button"
    disabled={product.countInStock === 0}
    >
Add To Cart
    </Button>
</ListGroup.Item>

                </ListGroup>
            </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
