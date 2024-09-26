import $point_api from "../http/point_api";
import { AxiosResponse } from 'axios';



export default class PointService{
    static getAllPoints():Promise<AxiosResponse>{
        return $point_api.get('/private/all_points');
    }

    static getPointsSequence(id:number, period:String):Promise<AxiosResponse>{
        return $point_api.get("/private/one_day",{
            params:{
                id: id,
                period:period
            }
        })
    }
}