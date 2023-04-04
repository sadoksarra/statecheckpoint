import React from 'react'
class Person extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       Person :{ fullname: "sarra",
        bio: "web developer",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjrr9npcmmoTlSKiXT100JG3NYdZJFmlKFA&usqp=CAU"},
        shows: true ,
        mountingTime : 0
      };
    }

    componentDidMount(){
      
       setInterval(() => {
        this.setState({mountingTime:this.state.mountingTime+=1})
       },1000

       )

    }

    change=()=>{
        this.setState({shows:!this.state.shows})
    }

    render() {
      return (
        <div>
          {
           this.state.shows?<><h1>My Name is {this.state.Person.fullname}</h1>
          <p>
            I am {this.state.Person.bio}
          </p>
          <img src={this.state.Person.imgSrc}></img>
          <p>Time : {this.state.mountingTime}</p>
          </> : null
          }
         
         <button onClick={this.change}>shows</button>
        
        </div>
      );
    }
  }
   
  export default Person;