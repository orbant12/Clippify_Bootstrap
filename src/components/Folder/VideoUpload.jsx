import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BasicSpeedDial from "../../assets/FileAdd/addBtn"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import DividerStack from "../../assets/FileAdd/fileAddCards"
import VideoUrlApp from "../../assets/videoTrim/videoUrlApp"
import VideoApp from "../../assets/videoTrim/videoApp"

function Example({setTitleInput,setFileImageEXT,setExtractMetaEXT,setPassedAudioDataUrlEXT,setVideoUrlEXT,handleUploadTrigger}) {
  
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedPopOut,setSelectedPopOut] = useState("");
  const [currentPage,setCurrentPage] = useState("selectMedia");





  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleNext = (selectedPopOut) => {
    setCurrentPage(selectedPopOut);
  }

  const handleUpload = () => {
    handleUploadTrigger()
  }

  return (
    <>
    <BasicSpeedDial togglePopup={() => handleShow("lg-down")} />
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentPage == "selectMedia" ? <DividerStack setSelectedPopUp={setSelectedPopOut} /> : null}
          {currentPage == "link" ? <VideoUrlApp />:null}
          {currentPage == "upload" ? <VideoApp handleTitleInput={setTitleInput} fileImage={setFileImageEXT} setExtractMeta={setExtractMetaEXT} setPassedAudioDataUrl={setPassedAudioDataUrlEXT} videoURL={setVideoUrlEXT}/>:null}
        </Modal.Body>
        <Modal.Footer>
        {currentPage == "selectMedia" ? <Button onClick={() => handleNext(selectedPopOut)}>Next</Button> :
          <Button onClick={() => handleUpload()}>Upload</Button>
        }
        
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;