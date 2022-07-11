import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import { useDispatch, useSelector } from 'react-redux';
import { callInitialData } from '../actions/callPlayer';
import ModalContent from './ModalContent';


const Player = () => {
    //players 데이터
    const [playerInfo, setPlayerInfo] = useState([]);
    //하나의 셀에 선수의 데이터
    const [modalInfo,setModalInfo] = useState();

    //dispatch 사용
    const dispatch = useDispatch();
    //modal 설정
    const [show, setShow] = useState(false);
    //modal닫기
    const handleClose = () => setShow(false);
    //Column 정의
    const columnDefs = [
        {
            headerName: "Name", field: "name"
        },
        {
            headerName: "Team_name", field: "team_name"
        }
        ,
        {
            headerName: "Points_per_game", field: "points_per_game"
        }
        ,
        {
            headerName: "Games_played", field: "games_played"
        }
    ]

    // 브라우저 로딩 =>데이터 불러오다
    useEffect(() => {
        getPlayerInfo();
    }, []);

    // 불러온 데이터를 initialState 에 넣어서 관리하다
    const getPlayerInfo = async () => {
        const playerData = await axios.get('https://nba-players.herokuapp.com/players-stats');

        dispatch(callInitialData({ ...playerData }));


    }
    //이렇게 한 이유 : axios 한 데이터 redux 상태관리 해보고 싶어서
    const playerInfo_1 = useSelector(state => state);
    const rowData = playerInfo_1.playerList[0];


    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,

    }
  
   
    //하나의 셀을 클릭했을때 데이터를 확인 가능하다
    const onCellClicked = (rowData) => {
        const playerCellData = rowData.data
        setModalInfo(playerCellData)
        toggleTrueFalse()
    }
    const toggleTrueFalse = () => {
        setShow(true);
    }
    //이 부분이 없으면 TextField 에 값을 넣을 수 없다
    const onChange =(e)=>{
        const {value, id} =e.target;
        setModalInfo({...modalInfo,[id]:value});
       //수정된 데이터를 dispatch 해서 수정시켜 보자
    }
    return (
        <div className="ag-theme-alpine" style={{ height: "400px" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onCellClicked={onCellClicked}
            />
            {show ? <ModalContent onChange={onChange} show={show} handleClose={handleClose} modalInfo={modalInfo}/> : null}
        </div>
    )
}

export default Player