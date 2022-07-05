import { getDefaultNormalizer } from '@testing-library/react';
import { useState } from 'react';

function Form({getData}) {
    const [weight,setweight]=useState("");
    const [height,setheight]=useState("");
    const [alert,setalert]=useState(false);
    const Submit=(e)=>{
        e.preventDefault();
        if (isNaN(weight) || isNaN(height)) {
            console.log("Not a valid input");
            setalert(true);
        }
        else{
            getData(weight,height)
            setalert(false);
    }

        
    };
   return(
     
        <div className="col-sm-4 shadow rounded px-5" align="center">
            <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
            <form onSubmit={Submit}>
                <div className="row">
                    <div className="col col-sm-6">
                        <div className="my-3">
                            <label className="form-label">Weight(kg) :</label>
                            <input
                                type="text"
                                value={weight}
                                onChange={(e)=>setweight(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="col col-sm-6">
                        <div className="my-3">
                            <label className="form-label">Hight(m) :</label>
                            <input
                                type="text"
                                value={height}
                                onChange={(e)=>setheight(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary my-3" value="GET BMI" />
            </form>


            {/* {alert && (
        <div className="alert alert-danger" role="alert">
          Plz enter valid datas
        </div>

      )}    thi is simplfied form or */}

            {alert===true?  <div className="alert alert-danger" role="alert">
          Plz enter valid datas  </div>:null

      }

        </div>
    );

}

export default Form