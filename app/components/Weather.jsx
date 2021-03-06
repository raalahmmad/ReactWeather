var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
getInitialState: function(){
    return{
        isLoading: false
    }
},    
handelSearch: function(location){
    var that = this;

    this.setState({isLoading: true});
    //debugger;
    openWeatherMap.getTemp(location).then(function(temp){
    that.setState({
    location: location,
    temp: temp,
    isLoading: false
})
    }, function(errorMessage){
        alert(errorMessage);
        that.setState({isLoading: false});
    });
   
},
render: function(){
    // use ES-6 destructuring
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
        if(isLoading){
            return <h3 className="text-center"> Fetching weather ... </h3>;
        }else if(temp && location){
            return <WeatherMessage location={location} temp={temp}/>
        }
    }

    return(
        <div>
<h1 className="text-center">Get Weather</h1>
<WeatherForm onSearch={this.handelSearch}/>
{renderMessage()}
        </div>
        
    );
}
});

module.exports = Weather;