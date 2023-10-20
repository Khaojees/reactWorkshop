import './transaction.css'
import PropTypes from 'prop-types';
import './item.css'
const numberWithCommas =(x)=>{
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
          x = x.replace(pattern, "$1,$2");
      return x;
}
const Item =(props)=>{
      const {title,amount}=props
      const status = amount<0 ?"expense" : "income"
      const symbol = amount<0 ?"-" : "+"
      return(
            <div>
                  <li className={status}> {title} <span>{symbol}{numberWithCommas(Math.abs(amount))}</span> </li>
            </div>
      );
}

Item.propTypes={
      title:PropTypes.string,
      amount:PropTypes.number
}

export default Item