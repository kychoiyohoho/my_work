import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal} from 'react-bootstrap'
import {  useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';


export const SearchModal = ({ show, handleClose }) => {
    const [search, setSearch] = useState({ team: "" });
    let [filteredData] = useState([]);
    const [gridData,setGridData] = useState([]);
  

    const onChangeSearch = (e) => {
    
        const { id,value } = e.target
        setSearch({ ...search, [id]: value });

    }
    //전체데이터에 key 값을 넣어주자
    const playerInfo_1 = useSelector(state => state);
    //모든 선수들의 데이터
    const rowData = playerInfo_1.playerList[0];
   

    const globalSearch =()=>{
         filteredData =rowData.filter((data)=>{
          return (
            data.team_name.toLowerCase().includes(search.team.toLowerCase())

          )
        });
        setGridData(filteredData);
        console.log(gridData);
    }

    //헤더정보
    const columns = [
        {
            dataField: "Name", text: "name"
        },
        {
            dataField: "Team_name", text: "team_name"
        }
        ,
        {
            dataField: "Points_per_game", text: "points_per_game"
        }
        ,
        {
            dataField: "Games_played", text: "games_played"
        }
    ]

    return (
        <Modal show={show} onHide={handleClose}>
           
                <Modal.Header closeButton>선수를 검색합니다</Modal.Header>
                <Modal.Body>
                    <span>Team:{' '}</span>
                    <select id ="team"className='mx-1' onChange={(e)=>onChangeSearch(e)}>
                        <option  value="Boston">Boston</option>
                        <option  value="Portland Trail Blazers">Portland Trail Blazers</option>
                        <option  value="Indiana Pacers">Indiana Pacers</option>
                    </select>
                    <Button onClick={globalSearch}>검색</Button>
                  <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                                <th>#</th>
                                { columns.map((column)=>(<th key={column.text}>{column.dataField}</th>))}
                            </tr>
                        </thead>
                        <tbody>
                           
                                 {gridData.map((data)=>(<tr><td></td><td>{data.name}</td><td>{data.team_name}</td><td>{data.points_per_game}</td><td>{data.games_played}</td></tr>))} 
                           
                        </tbody>
                    
                  </Table>
                  

                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
                
           
          
        </Modal>
    )
}
