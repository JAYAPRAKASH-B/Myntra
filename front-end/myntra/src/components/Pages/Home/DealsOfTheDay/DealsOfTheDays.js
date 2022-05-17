import { } from "react-bootstrap"
import { Typography } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import './/../DealsOfTheDay/Deals.css'
import '../Global.css'
import img1 from '../../../../assets/Deals/1.webp'
import img2 from '../../../../assets/Deals/2.webp'
import img3 from '../../../../assets/Deals/3.webp'
import img4 from '../../../../assets/Deals/4.webp'
import img5 from '../../../../assets/Deals/5.webp'
import img6 from '../../../../assets/Deals/6.webp'
import img7 from '../../../../assets/Deals/7.webp'
import img8 from '../../../../assets/Deals/8.webp'
function DealsOfTheDays() {
  return (
    <div className='deal__container'>
      <Typography wrap className="glb--title" variant="h4" noWrap>
        deal of the day
      </Typography>

      <div className="deal--list">
        <Row className="deal--listRow">
          <Col><img src={img1} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img2} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img3} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img4} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img5} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img6} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img7} className="deal--img" alt="Image 1" /></Col>
          <Col><img src={img8} className="deal--img" alt="Image 1" /></Col>
        </Row>
      </div>
    </div >
  )
}

export default DealsOfTheDays