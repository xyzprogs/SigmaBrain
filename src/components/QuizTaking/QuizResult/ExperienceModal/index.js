import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap/';
import { useState, useEffect } from 'react';


const ExperienceModal = (props) => {
    const showModal = props.showModal;
    const handleClose = props.handleClose;
    const prevExperience = props.prevExperience;
    const experience = props.experience;
    
    const convertExperienceToLevel = (experience) =>{
        let level = 1;
        let threshHold = 1;
        let flag = true;
        while(flag){
            if (threshHold > experience){
                flag = false;
            }else{
                experience -= threshHold;
                level += 1;
                threshHold += 5;
            }
        }
        return {"level": level, "experience": experience}
    }
    const [currentLevel, setCurrentLevel] = useState(convertExperienceToLevel(prevExperience).level);
    const [currentExp, setCurrentExp] = useState(convertExperienceToLevel(prevExperience).experience);
    const [postLevel, setPostLevel] = useState(convertExperienceToLevel(experience).level);
    const [postExp, setPostExp] = useState(convertExperienceToLevel(experience).experience);
    const [completed, setCompleted] = useState(0);

    const getExpForLevelUp = (level) => {
        if (level === 1){
            return 0;
        }
        return ((level - 1) * 5) + 1;
    }


    useEffect(() => {
        
    }, [completed, currentLevel, experience, postExp, prevExperience])

    return(
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )

}



export default ExperienceModal;