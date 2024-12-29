import React from "react";
export default function SlamBook(){
    return(
    <div className="inputs">
<center>
        <fieldset className="cl">
        <legend>SlamBook</legend>
            <center>
        
        <form>
          <div className="form-group">
            <label for="name">Name: </label>
            <input type="text" id="name"/>
          </div>
          <div className="form-group">
            <label for="Nickname">Nickname: </label>
            <input type="text" id="Nickname"/>
          </div>
          <div className="form-group">
            <label for="phone">Phone: </label>
            <input type="text" id="phone"
            pattern="^[0-9]{10}$" required   />
          </div>
          <div className="form-group">
                <label for="memories" >Memories:</label>
                <textarea></textarea>
          </div>
          <div className="form-group">
                <label for="Actor" >Favorite Actor:</label>
                <select id="category" name="category">
          <option value="Rajnikanth">Rajnikanth</option>
          <option value="Vijay">Vijay</option>
          <option value="Suriya">Suriya</option>
        </select>
        
          </div>
          <div className="form-group">
                <label for="School" >School:</label>
                <select id="category" name="category">
          <option value="Rajnikanth">Saratha Matric Hr sec School</option>
          <option value="Vijay">Sri vidalaya School</option>
          <option value="Suriya">Saratha International School</option>
        </select>
        
          </div>
          


         
        </form>
        </center>
        <button className="but">Submit</button>
        </fieldset>
        </center>
      
      </div>
    )
}