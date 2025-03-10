
import './Navigation.css'

function Navigation({onRouteChange, isSignedIn})  {
    console.log('onRouteChange in Navigation:', onRouteChange);
    return(
        isSignedIn
        ?  (<h3 onClick={() => onRouteChange('_home_')} className="linktext">Signout</h3>)
        :   (<div>
            <p onClick={()=> {onRouteChange('_home_')}} className='linktext'  > Signin </p>
            <p onClick={()=> {onRouteChange('_register_')}} className='linktext'  > Register </p>
            </div>)
    );
}

export default Navigation;