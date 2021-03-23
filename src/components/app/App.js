import React, {Component} from "react";
import './App.css';



import SvgMap from "../svgMap";

class App extends Component {
  componentDidMount() {
     // Таблица
     const table = document.querySelector(".metricks__table");
    
     table.addEventListener("click", (e) => {
       const parentElement = e.target.parentElement;
   
       if (parentElement.classList.contains("group__header")) {
         parentElement.parentElement.classList.toggle("group-active");
       }
     })
  }

  
  render() {
    return (
      <div className="metricks container">
        <div className="metricks__body">
          <div className="metricks__map map">
  
            <SvgMap></SvgMap>
          </div>
          <div className="metricks__table table">
            <div className="table__header table__row">
              <div className="table__cell_header">Страна</div>
              <div className="table__cell_header">Посетители</div>
              <div className="table__cell_header">Доля</div>
            </div>
            <div className="table__main">
              <div className="table__group group">
                <div className="group__header table__row">
                  <div className="table__cell_bold">Россия</div>
                  <div className="table__cell_bold">25</div>
                  <div className="table__cell_bold">25%</div>
                </div>
                <div className="group__main">
                  <div className="table__row">
                    <div className="table__cell_thin">Москва</div>
                    <div className="table__cell_thin">10</div>
                    <div className="table__cell_thin">40%</div>
                  </div>
                  <div className="table__row">
                    <div className="table__cell_thin">Санкт-Петербург</div>
                    <div className="table__cell_thin">15</div>
                    <div className="table__cell_thin">60%</div>
                  </div>
                </div>
  
              </div>
              <div className="table__group group">
                <div className="group__header table__row">
                  <div className="table__cell_bold">Нигерия</div>
                  <div className="table__cell_bold">25</div>
                  <div className="table__cell_bold">25%</div>
                </div>
                <div className="group__main">
                  <div className="table__row">
                    <div className="table__cell_thin">Москва</div>
                    <div className="table__cell_thin">10</div>
                    <div className="table__cell_thin">40%</div>
                  </div>
                  <div className="table__row">
                    <div className="table__cell_thin">Санкт-Петербург</div>
                    <div className="table__cell_thin">15</div>
                    <div className="table__cell_thin">60%</div>
                  </div>
                </div>
  
              </div>
              <div className="table__group group">
                <div className="group__header table__row">
                  <div className="table__cell_bold">Украина</div>
                  <div className="table__cell_bold">25</div>
                  <div className="table__cell_bold">25%</div>
                </div>
                <div className="group__main">
                  <div className="table__row">
                    <div className="table__cell_thin">Москва</div>
                    <div className="table__cell_thin">10</div>
                    <div className="table__cell_thin">40%</div>
                  </div>
                  <div className="table__row">
                    <div className="table__cell_thin">Санкт-Петербург</div>
                    <div className="table__cell_thin">15</div>
                    <div className="table__cell_thin">60%</div>
                  </div>
                </div>
  
              </div>
              <div className="table__group group">
                <div className="group__header table__row">
                  <div className="table__cell_bold">КНР</div>
                  <div className="table__cell_bold">25</div>
                  <div className="table__cell_bold">25%</div>
                </div>
                <div className="group__main">
                  <div className="table__row">
                    <div className="table__cell_thin">Москва</div>
                    <div className="table__cell_thin">10</div>
                    <div className="table__cell_thin">40%</div>
                  </div>
                  <div className="table__row">
                    <div className="table__cell_thin">Санкт-Петербург</div>
                    <div className="table__cell_thin">15</div>
                    <div className="table__cell_thin">60%</div>
                  </div>
                </div>
  
              </div>
              <div className="table__group group">
                <div className="group__header table__row">
                  <div className="table__cell_bold">США</div>
                  <div className="table__cell_bold">25</div>
                  <div className="table__cell_bold">25%</div>
                </div>
                <div className="group__main">
                  <div className="table__row">
                    <div className="table__cell_thin">Бостон</div>
                    <div className="table__cell_thin">10</div>
                    <div className="table__cell_thin">40%</div>
                  </div>
                  <div className="table__row">
                    <div className="table__cell_thin">Нью-йорк</div>
                    <div className="table__cell_thin">15</div>
                    <div className="table__cell_thin">60%</div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
        
      </div>
    );
  }
  
}

export default App;
