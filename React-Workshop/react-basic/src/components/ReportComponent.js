import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'
const ReportComponent=()=>{
      const {income,expense}=useContext(DataContext)
      // function numberWithCommas(x) {
      //       x = x.toString();
      //       var pattern = /(-?\d+)(\d{3})/;
      //       while (pattern.test(x))
      //           x = x.replace(pattern, "$1,$2");
      //       return x;
      //   }

      const numberWithCommas =(x)=>{
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
      }
      return(
            <div>
                  <h4>ยอดคงเหลือ (บาท)</h4>
                  <h1>{numberWithCommas((income-expense).toFixed(2))}</h1>
                  <div className="report-container">
                        <div>
                              <h4>ยอดรายรับ</h4>
                              <p className="report plus">{numberWithCommas(income)}</p>
                        </div>
                        <div>
                              <h4>ยอดรายจ่าย</h4>
                              <p className="report minus">{numberWithCommas(expense)}</p>
                        </div>
                  </div>
            </div>
      );
}

export default ReportComponent