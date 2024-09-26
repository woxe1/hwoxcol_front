import { Button, List, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ColorToggleButton from "./ColorToggleButton";
import { Point } from '../models/Point';
import PointService from "../services/PointService";





export function PointSideBar({setPointId, setPeriod}:any) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        PointService.getAllPoints().then((resp) => {
            setPoints(resp.data);
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const choosePoint = (event:any, index:number) => {
        setSelectedIndex(index);
        setPointId(index);
    };
    const [value, setValue] = useState("");
    const filteredData = points.filter((point:Point) => {
        return point.full_name.toLowerCase().includes(value.toLowerCase());
      });

    return (
        <div>
            <div>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="search_container">
                        <input className="search_input" type="text" placeholder="Search..." onChange={(event) => setValue(event.target.value)} />
                    </div>
                    <div >
                        <div className="scrollable_col">
                            {filteredData.map((point) => (
                                <div className="point-card">
                                    <div key={point.id} onClick={(event) => choosePoint(event, point.id)} className={selectedIndex === point.id? 'selected' : ''}>
                                        {point.full_name}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className="control-item">
                        <ColorToggleButton  parentAlignment={setPeriod}/>
                    </div>
                    
                </div>
            </div>
            <div className="menu-btn-container">
                    <Button className="menu-btn" onClick={toggleMenu}>MENU</Button>
                </div>
            
        </div>
    );
}