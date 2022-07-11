import { TextField } from '@material-ui/core';
import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './components.css';

const ModalContent = ({ show, handleClose, modalInfo, onChange }) => {
    const{name,team_name,points_per_game,games_played,rebounds_per_game,assists_per_game,blocks_per_game} = modalInfo;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >
                    <span>Players stats</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modalForm'>
                    <div>
                    <TextField
                      
                        value={name}
                        onChange={e => onChange(e)}
                        id="name"
                        placeholder="Enter name"
                        variant="standard"
                        margin="dense"
                        label="Name"
                        size="small"
                    />

                    <TextField
                        value={team_name}
                        onChange={e => onChange(e)}
                        id="team_name"
                        placeholder="Enter team_name"
                        variant="standard"
                        margin="dense"
                        label="Team_name"
                        size="small"
                    />
                    <TextField
                        value={points_per_game}
                        onChange={e => onChange(e)}
                        id="points_per_game"
                        placeholder="Enter Points_per_game"
                        variant="standard"
                        margin="dense"
                        label="Points_per_game"
                        size="small"
                    />
                   
                    
                    <TextField
                        value={games_played}
                        onChange={e => onChange(e)}
                        id="games_played"
                        placeholder="Enter games_played"
                        variant="standard"
                        margin="dense"
                        label="Games_played"
                        size="small"
                    />
                     </div>
                    <div>
                    <TextField
                        value={rebounds_per_game}
                        onChange={e => onChange(e)}
                        id="rebounds_per_game"
                        placeholder="Enter rebounds_per_game"
                        variant="standard"
                        margin="dense"
                        label="Rebounds_per_game"
                        size="small"
                    />
                    <TextField
                        value={assists_per_game}
                        onChange={e => onChange(e)}
                        id="assists_per_game"
                        placeholder="Enter assists_per_game"
                        variant="standard"
                        margin="dense"
                        label="Assists_per_game"
                        size="small"
                    />
                    <TextField
                        value={blocks_per_game}
                        onChange={e => onChange(e)}
                        id="blocks_per_game"
                        placeholder="Enter blocks_per_game"
                        variant="standard"
                        margin="dense"
                        label="Blocks_per_game"
                        size="small"
                    />
                    </div>
                </div>




            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Update</Button>
                <Button variant="danger">Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalContent