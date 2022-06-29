import React from 'react'
import '../css/Section.css'
import { connect } from 'react-redux'
import {addOne} from '../reducers/generalReducer'


const Section = (props) => {
  const sumarNum = ()=>{
    props.sumar1(1)
  }
  return (
    <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate'
                data-aos='fade-up' data-aos-delay='200'>
                    <h1>Portafolio Personal</h1>
                    <span>{`contador: ${props.contador}`}</span>

                </div>
            </div>
        </div>
        <button onClick={sumarNum}>sumar</button>
    </section>
    
  )
}
const mapStateToProps = (reducers) => {
  return {
    contador: reducers.generalReducer.contador
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
        sumar1: (numero)=>{
          dispatch(addOne(numero))
        }
      }    
}     
      
export default connect(mapStateToProps,mapDispatchToProps)(Section)