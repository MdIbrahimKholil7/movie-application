import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserDetails from './UserDetails';
const MovieModal = (props) => {
    const { genres, language, name, rating, image, premiered, summary } = props?.movie || {}

    console.log(name)
    return (
        <div>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='summery' id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className='summery'>Summary</h4>
                    <p className='summary'>{
                        summary?.split('</p>').join('')?.slice(3, summary?.length).split('<b>').join('').split('</b>').join('')
                    }</p>
                    <div className='mt-5'>
                        <UserDetails/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-btn' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieModal;