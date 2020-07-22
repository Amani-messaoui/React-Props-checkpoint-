import React from 'react'
import PropTypes from 'prop-types'
  const ProfileComponents =(props) =>{
      return(
        <div>
        <div>{props.children}</div>
        <button
            style={{marginBottom:"20px"}}
             type="button" class="btn btn-danger"color="danger" 
            onClick={() => props.handelName(props.fullName)}> Name of profile
            </button>
        <div>
        <h1> <span>fullName: </span>{props.fullName}</h1>
        <h1><span>bio:</span> {props.bio}</h1> 
        <h1><span>profession:</span> {props.profession}</h1>
        </div>
       
      </div>
    )}
    ProfileComponents.defaultProps = {
        fullName: "Name",
        bio: "bio",
        Profession: "profession",
      };
     ProfileComponents.propTypes = {
        fullName: PropTypes.string, 
        bio: PropTypes.string,
        profession: PropTypes.string,
       
      };
     
    export default ProfileComponents ;
     