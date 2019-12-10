import React, { Component } from "react";
import CompInfo from "./CompInfo";
import StockInfo from "./StockInfo";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

let fetchinterval;

export default class App extends Component {
  state = {
    value: "",
    newVal: "",
    comperror: null,
    stockerror: null
  };

  componentDidMount() {
    fetch(
      `https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjIwYThjMTExYzRlYzM1YTRhZjExNGM3ZDJkMTQxMGQz`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Can't find company");
        }
        return response.json();
      })
      .then(comp => {
        this.setState({
          complist: comp.companies
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleChange(event, values) {
    console.log(values);
    // const { target: { name, value } } = event;
    this.setState({
      newVal: values.ticker
    });
  }
  handleTextChange(event) {
    const {
      target: { value }
    } = event;
    this.setState({
      newVal: value
    });
  }

  fetching() {
    console.log(new Date());

    if (!this.state.comperror && !this.state.stockerror) {
      fetch(
        `https://api-v2.intrinio.com/companies/${this.state.value}?api_key=OjIwYThjMTExYzRlYzM1YTRhZjExNGM3ZDJkMTQxMGQz`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error("Can't find company");
          }
          return response.json();
        })
        .then(comp => {
          this.setState({
            comp: comp
          });
        })
        .catch(err => {
          this.setState({
            comp: null,
            comperror: err.message
          });
          console.error(err);
        });

      fetch(
        `https://api-v2.intrinio.com/securities/${this.state.value}/prices/realtime?api_key=OjIwYThjMTExYzRlYzM1YTRhZjExNGM3ZDJkMTQxMGQz`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error("Can't find company stock");
          }
          return response.json();
        })
        .then(stock => {
          this.setState({
            stock: stock
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            stock: null,
            stockerror: err.message
          });
        });
    }
  }

  fetchInfo() {
    this.fetching();
    fetchinterval = setInterval(() => {
      if (this.state.comperror && this.state.stockerror) {
        clearInterval(fetchinterval);
      }
      this.fetching();
    }, 5000);
  }

  runUpdate() {
    if (this.state.newVal !== this.state.value) {
      clearInterval(fetchinterval);
      this.setState(
        {
          value: this.state.newVal,
          comperror: null,
          stockerror: null
        },
        () => this.fetchInfo()
      );
    }
  }

  render() {
    let compdetails;
    let stockdetails;
    if (!this.state.stockerror) {
      stockdetails = this.state.stock ? (
        <StockInfo stock={this.state.stock} />
      ) : (
        <div></div>
      );
    } else {
      stockdetails = <div>{this.state.stockerror}</div>;
    }
    if (!this.state.comperror) {
      compdetails = this.state.comp ? (
        <CompInfo comp={this.state.comp} />
      ) : (
        <h3>Choose a company</h3>
      );
    } else {
      compdetails = <div>{this.state.comperror}</div>;
    }

    return (
      <div className="container">
        <div className="text-center">
          <Header />
          <hr />
          <div className = "input">
            <Autocomplete
              id="Company"
              onChange={this.handleChange.bind(this)}
              options={this.state.complist}
              getOptionLabel={option => option.ticker}
              disableClearable
              freeSolo
              style={{ width: 300, hight: 77.5 }}
              renderInput={params => (
                <TextField
                  id="Companyinput"
                  {...params}
                  label="Company Ticker"
                  variant="outlined"
                  fullWidth
                  value={""}
                  onChange={this.handleTextChange.bind(this)}
                />
              )}
            />
            <Button className = 'button' variant="light" onClick={this.runUpdate.bind(this)}>
              Update
            </Button>
          </div>
          <hr />
          {compdetails}
          <hr />
          {stockdetails}
        </div>
      </div>
    );
  }
}
