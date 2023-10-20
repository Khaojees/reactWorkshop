const DropdownComponent=({changeFoodData})=>{
      const changeFoodDataa=(e)=>{
            return console.log(e.target.value)
      }

      return(
            <nav>
                  <h2>Dynamic Dropdown</h2>
                  <select className="menu" onChange={changeFoodData}>
                        <option value="all-menu">All Menu</option>
                        <option value="stir-fry">Stir-Fry</option>
                        <option value="Curry-TomYum">Curry-TomYum</option>
                        <option value="drink">Drink</option>
                        <option value="steak">Steak</option>
                  </select>
            </nav>
      )
}

export default DropdownComponent