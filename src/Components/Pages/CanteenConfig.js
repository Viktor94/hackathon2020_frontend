import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CanteenConfig.css';
import CanteenService from '../../Services/canteen.service';

const CanteenConfig = () => {
    const history = useHistory();
    const configureCanteen = () => {
        history.push('/home');
    }
    
    const [lunchtimeInMinute, setLunchtimeInMinute] = useState("");
    const [maxCanteenCapacity, setMaxCanteenCapacity] = useState("");
    
    const onChangeLunchtimeInMinute = (e) => {
        const lunchtimeInMinute = e.target.value;
        setLunchtimeInMinute(lunchtimeInMinute);
    };

    const onChangeMaxCanteenCapacity = (e) => {
        const maxCanteenCapacity = e.target.value;
        setMaxCanteenCapacity(maxCanteenCapacity);
    };

    const handleCanteenConfigure = (e) => {
        e.preventDefault();
        CanteenService.canteenConfigure(lunchtimeInMinute, maxCanteenCapacity)
            .then((response) => {
                console.log(response)
                configureCanteen()
            },
                (error) => {
                    return error
                })
    };

    return (
<form>
        <div className="form-row align-items-center">

        <div classNam="col-sm-3 my-1">
          <label classNam="sr-only" for="lunchtimeInMinute">LunchtimeInMinute</label>
          <div classNam="input-group">
            <div classNam="input-group-prepend">
              <div classNam="input-group-text"><i class="fas fa-user-clock"></i></div>
            </div>
            <input type="text" classNam="form-control" id="lunchtimeInMinute" placeholder="Lunchtime In Minute" value={lunchtimeInMinute}onChange={onChangeLunchtimeInMinute}></input>
          </div>
        </div>

        <div classNam="col-sm-3 my-1">
          <label classNam="sr-only" for="maxCanteenCapacity">MaxCanteenCapacity</label>
          <div classNam="input-group">
            <div classNam="input-group-prepend">
              <div classNam="input-group-text"><i class="fas fa-users-cog"></i></div>
            </div>
            <input type="text" classNam="form-control" id="maxCanteenCapacity" placeholder="Max Canteen Capacity" value={maxCanteenCapacity}onChange={onChangeMaxCanteenCapacity}></input>
          </div>
        </div>

        <div class="col-auto my-1">
          <button type="button" name="button" classNam="btn btn-primary" onClick={handleCanteenConfigure}>Configure</button>
        </div>

      </div>
    </form>
    )
}

export default CanteenConfig