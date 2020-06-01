import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {submitImeiData} from './action/appAction';
import { connect } from 'react-redux';
const imeiData = [{ id: 'imeiNo', label: 'Imei No',type:"number", value: "" }]
// MAIN FILE WHICH DISPLAYED THE CONTENT IN UI
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imeiData:imeiData
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeHandler(index, data, event) {
    this.setState({
      imeiData: [...this.state.imeiData.slice(0, index),
        {
            ...this.state.imeiData[index],
            value: event.target.value,
        },
        ...this.state.imeiData.slice(index + 1)],
    })
}
handleSubmit() {
  const imeiObjectData = this.state.imeiData.reduce((data, obj) => {
      return { ...data, [obj.id]: obj.value};
  }, {})
   if(imeiObjectData.imeiNo.length!==0){
     this.props.submitImeiData(imeiObjectData.imeiNo);
   }
}
  render(){
    return (
      <div className="App">
        {this.state.imeiData.map((data,index)=>{
            return (
        <React.Fragment>
          <Grid container={true} justify="center" alignItems="center"> 
          <Grid item>
          <TextField
          id={data.id}
          type={data.type}
          label={data.label}
          onChange={this.onChangeHandler.bind(this, index, data)}
          helperText={this.props.error ? 
          <span style={{ color: 'red' }}>
          {this.props.imeiData.message}</span> : ""}
          value={data.value}
         />
         </Grid>
        <Grid item style={{marginTop:'10px',marginLeft:'10px'}}>
        <Button
        variant="contained"
        onClick={this.handleSubmit}
        >
        Submit
        </Button>
        </Grid>
        </Grid>

              </React.Fragment>
            )
          })
        }

      </div>
    );
  }

}

const methods = {
  submitImeiData
}
const mapStateToProps = ({ AppReducer }) => {
  return {
      imeiData: AppReducer.imeiStoreData,
      error:AppReducer.error,
  }
}
export default connect(mapStateToProps, methods)(App);