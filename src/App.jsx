
import React from 'react'
import Navigation from "./components/navigation.component";
import Footer from "./components/footer.component";
import {Switch,Route} from 'react-router-dom';
import Home from "./pages/home.component";
import Blog from "./pages/blog.component";
import data from "../src/data/data.json"
import Contact from "./pages/contact.component";
class App extends React.Component{
    constructor() {
        super();
        this.state={
            textData: {}
        }


    }
    getPageData(){
        this.setState({
            textData:data
        })
    }
    componentDidMount() {
       this.getPageData();
    }

    render() {

        return (
            <React.Fragment>


                <Navigation data={this.state.textData.Navbar} />
                {console.log(this.state.textData.Navbar)}
                <Switch>
                    <Route exact path='/' render={(props)=>(<Home {...props} HomeData={this.state.textData.Home}  />)}/>
                    <Route  path='/blog/:blog_id' component={Blog}/>
                    <Route  exact path='/contact' component={Contact}/>
                </Switch>

                <Footer FooterData={this.state.textData.Footer}/>
            </React.Fragment>

        );

    }


}

export default App;
