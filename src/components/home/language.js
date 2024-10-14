import { Row, Col } from 'react-bootstrap';
import './../../App.css';
import Img from '../tags/img';

const Language = () => {
    return (
        <>
            <div className='container'
                data-aos="zoom-in-up"
            >
                <div className='my-5 px-5 py-5 shadow card borderTop'>
                    <div className="h3 fw-bold my-5 text-uppercase" data-aos="zoom-in-up">
                        Current Languages used
                    </div>
                    <div className='row my-3'>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/html.jfif' />
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/css.png'/>
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/js.png'/>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/php.png' />
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/laravel.png' />
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/reactNative.png' />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/reactJs.png' />
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/wordpress.png' />
                        </div>
                        <div className='col-lg-4' data-aos="zoom-in-up">
                            <Img source='/images/shopify.jfif' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Language;
