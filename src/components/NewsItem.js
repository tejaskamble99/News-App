import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import noimg from '../Images/no-image.png'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} =this.props;
    return (
      
    <Card className='form-control mb-3' style={{ width: 'auto', height: '34rem' }}>
      <Card.Img variant="top" src={!imgUrl?noimg:imgUrl} style={{ height: '10rem', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button className='btn btn-sm' href={newsUrl} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    
    )
  }
}

export default NewsItem
