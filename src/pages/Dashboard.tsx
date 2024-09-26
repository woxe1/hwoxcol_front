import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { createChart } from 'lightweight-charts';
import ThreePosToggle from "../components/ColorToggleButton";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ColorToggleButton from "../components/ColorToggleButton";
import { Link } from "react-router-dom";
import PointService from "../services/PointService";
import { log } from "console";
import PointSelector from "../components/PointSelector";
import { stringify } from "querystring";
function Dashboard() {
    const [data, setData] = useState()
    const areaSeriesRef = useRef<any>(); // Ссылка на объект areaSeries
    useEffect(() => {
        const container = document.getElementById('container');
        if (!container) return;

        const chartOptions:any = {
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
            },
            layout: {
                textColor: 'white',
                background: {
                    type: 'solid',
                    color: '#1e1e1e'
                }
            }
            
          };
        const chart = createChart(container, chartOptions);
        areaSeriesRef.current= chart.addAreaSeries({
            lineColor: '#2962FF',
            topColor: '#2962FF',
            bottomColor: 'rgba(41, 98, 255, 0.28)',
        });

        chart.timeScale().fitContent();

        new ResizeObserver(entries => {
            if (entries.length === 0 || entries[0].target !== container) { return; }
            const newRect = entries[0].contentRect;
            chart.applyOptions({ height: newRect.height, width: newRect.width });
          }).observe(container);

    }, [data]);


    const [point_id, setPointId]=useState<Number>()
    const [period, setPeriod] = useState()


 

    useEffect(()=>{
        if (period!=undefined && point_id!=undefined){
            PointService.getPointsSequence(Number(point_id),String(period)).then((resp:any)=>{
                if(resp.status ==200){
                    resp.data.sort((a:any, b:any) => a.time - b.time);
                    areaSeriesRef.current.setData(resp.data);
                }
            })
            console.log(point_id, "  /// ", period)
        }
    },[period, point_id])

    return (
        <div className="chart-view">

            <div className="control-container">
                <div className="control-item">
                    <PointSelector onChange={setPointId}/>
                </div>
                <div className="control-item">
                    <ColorToggleButton parentAlignment={setPeriod}/>
                </div>
            </div>
            <div id="chart-parent-container" className="chart-parent-container">
                <div className="chart-container" id="container">
                </div>
            </div>
            <div>

            </div>
            {/* <Link to="/home">Home</Link>
            <Link to="/protected/newprot">Home</Link> */}
            
        </div>
    );
}

export default Dashboard;