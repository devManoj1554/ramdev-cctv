import React from "react";


class ErrorBoundary extends React.Component{


state={

error:false

};



static getDerivedStateFromError(){

return{

error:true

};

}



render(){


if(this.state.error){


return(

<div style={{

padding:"50px",

textAlign:"center"

}}>


<h1>
Something went wrong
</h1>


<p>
Please refresh the page.
</p>


</div>

)

}


return this.props.children;


}


}


export default ErrorBoundary;