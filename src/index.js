import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MediaQuery from 'react-responsive';
import Avatar from 'material-ui/Avatar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        background: '#F5F5F5',
    },
    oval:{
        width: 120,
        height: 40,
        background: '#212226',
        'border-radius': 40,
        zIndex: 1,
        position: 'absolute',
        opacity: '0.7',
        float: 'right',
        right: 16,
        top: 16,
        maxWidth: 'none',
        minWidth: 'none',

    },
    pOval: {
        color: '#ffffff',
        float: 'left',
        marginRight: 4,
        marginLeft: 10,
        marginBottom: 0,
        paddingBottom: 0,
        marginTop: 12,
        'font-size': '80%',

    },
    card: {
        position: 'relative',
    },
    cardImg: {
        zIndex: 0,
    },
    gridList: {
        width: '80%',
        height: '100%',
        overflowY: 'auto',
        marginTop: 70,
    },
    cardTitle:{
        paddingBottom: 0,
    },
    cardTitlePortrait:{
        paddingBottom: 0,
        fontSize: '100%',
        marginBottom: 5,
        fontWeight: 'bold',
        '-webkit-margin-before': '0em',
        '-webkit-margin-after': '0em',
        '-webkit-margin-start': '0px',
        '-webkit-margin-end': '0px',
    },cardSubTitlePortrait:{
        paddingBottom: 0,
        fontSize: '100%',
        marginBottom: 5,
        '-webkit-margin-before': '0em',
        '-webkit-margin-after': '0em',
        '-webkit-margin-start': '0px',
        '-webkit-margin-end': '0px',
    },
    cardAction: {
      paddingTop: 0,
    },

    appBar: {
      position: 'fixed',
        color: '#FF7800',
        background:'#FF7800',
    },
    drawer: {
        backgroundColor:'#FF7800',
        color: '#FF7800',

    },
    drawerAppBar: {
        backgroundColor:'#FF7800',
        color: '#FF7800',

    },

    cardP: {
        marginTop: 4,
        float: 'left',
        marginRight: 4,
        marginBottom: 0,
        paddingBottom: 0,
        'font-size': '80%',
        color:"#000000",
    },
    gridListPortrait: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        marginTop: 80,
        paddingRight: 10,
        paddingLeft: 10,
    },
    fab: {
        marginLeft: 40,
    },
    flat: {
        marginTop: 15,
        'align-self': 'inherit',
        color: 'white',
        position: 'relative',
    },
    pAppBar: {
        color: '#ffffff',
        float: 'left',
        marginRight: 4,
        marginLeft: 10,
        marginBottom: 0,
        paddingBottom: 0,
        marginTop: 12,
        fontSize: '100%',
    },
    divPoitsAppBar:{
        float: 'left',
        marginRight: 40,
        marginTop: 11,
        maxWidth: 'none',
        minWidth: 'none',
    },
    coinAv: {
        marginTop: 5,
    },
    coinNP: {
        marginTop: 12,
    },
    coinAppBar: {
        marginTop: 15,
    },
    imgLogo: {
        height: 40,
        marginTop: 5,
    },
    imgLogoDrawer: {
        height: 100,
        display: 'block',
        margin: 'auto',
    },
    imgDialog: {
        margin: 'auto',
        display: 'block',

    },
    imgDialogPor: {
        margin: 'auto',
        display: 'block',
        height: 200,
    },
    pDialogTitle: {
        fontSize: '140%',
        color: '#000000',
        '-webkit-margin-before': '0em',
        '-webkit-margin-after': '0em',
        '-webkit-margin-start': '0px',
        '-webkit-margin-end': '0px',
    },
    pDialogCat: {
        fontSize: '100%',
        '-webkit-margin-before': '0em',
        '-webkit-margin-after': '0em',
        '-webkit-margin-start': '0px',
        '-webkit-margin-end': '0px',
    },
    pBhide: {
        display: 'none'
    },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    }


    render(){
        return(
            <AppBar
                title= {this.props.user.name}
                iconElementLeft={<img src="https://aerolab.co/images/apple-touch-icon.png" style={styles.imgLogo}/>}
                style={styles.appBar}
            >
                <div style={styles.divPoitsAppBar}>
                    <p style={styles.pAppBar}>You have {this.props.user.points}</p>
                    <Avatar
                        color={deepOrange300}
                        backgroundColor={orange200}
                        size={15}
                        style={styles.coinAppBar}
                    />
                </div>
                <FlatButton label="Highest" style={styles.flat} onClick={() => this.props.onClick(0)}/>
                <FlatButton label="Lowest" style={styles.flat} onClick={() => this.props.onClick(1)}/>
            </AppBar>
        );
    }

}

class NavPortrait extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: []
        }
    }


    render(){
        return(
            <AppBar
                title= {this.props.user.name}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={styles.appBar}
                onLeftIconButtonClick={() => this.props.onClick(2)}
            >
                <FlatButton label="Highest" style={styles.flat} onClick={() => this.props.onClick(0)}/>
                <FlatButton label="Lowest" style={styles.flat} onClick={() => this.props.onClick(1)}/>
            </AppBar>
        );
    }

}

class GridPortrait extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }



    render() {
        return(
            <GridList
                cellHeight={260}
                cols={2}
                style={styles.gridListPortrait}
                padding={10}
            >
                {this.props.products.map((tile) => (
                    <ProductCardPortrait
                        onClick={() => this.props.onClick(tile)}
                        product ={tile}
                        user ={this.props.user}
                    />
                ))}
            </GridList>
            );

    }
}

class NeedPoints extends React.Component{
    render(){

        return(
          <div style={styles.oval}>
              <p style={styles.pOval}>You need {this.props.points}</p>
              <Avatar
                  color={deepOrange300}
                  backgroundColor={orange200}
                  size={15}
                  style={styles.coinNP}
              />
          </div>
        );


    }
}


class ProductCardPortrait extends React.Component{
    render(){
        if (this.props.product.cost > this.props.user.points){
            return(

                <Card>
                    <CardMedia>
                        <NeedPoints
                            points = {this.props.product.cost - this.props.user.points}
                        />
                        <img src={this.props.product.img.hdUrl} />
                    </CardMedia>
                    <CardTitle>
                        <p style={styles.cardTitlePortrait}>{this.props.product.name}</p>
                        <p style={styles.cardSubTitlePortrait}>{this.props.product.category}</p>
                        <div>
                            <p style={styles.cardP}>{this.props.product.cost}</p>
                            <Avatar
                                color={deepOrange300}
                                backgroundColor={orange200}
                                size={15}
                                style={styles.coinAv}
                            >
                            </Avatar>
                        </div>
                    </CardTitle>
                </Card>

            )

        }
        else {
            return(
                <Card onClick={() => this.props.onClick(this.props.product)}>
                    <CardMedia>
                        <img src={this.props.product.img.hdUrl} />
                    </CardMedia>
                    <CardTitle>
                        <p style={styles.cardTitlePortrait}>{this.props.product.name}</p>
                        <p style={styles.cardSubTitlePortrait}>{this.props.product.category}</p>
                        <div>
                            <p style={styles.cardP}>{this.props.product.cost}</p>
                            <Avatar
                                color={deepOrange300}
                                backgroundColor={orange200}
                                size={15}
                                style={styles.coinAv}
                            >
                            </Avatar>
                        </div>
                    </CardTitle>
                </Card>
            );
        }
    }
}

class ProductCard extends React.Component{
    render(){
        if (this.props.product.cost > this.props.user.points){
            return(

                        <Card>
                            <CardMedia>
                                <NeedPoints
                                    points = {this.props.product.cost - this.props.user.points}
                                />
                                <img src={this.props.product.img.hdUrl} />
                            </CardMedia>
                            <CardTitle title={this.props.product.name} subtitle={this.props.product.category} style={styles.cardTitle} >
                                <div>
                                    <p style={styles.cardP}>{this.props.product.cost}</p>
                                    <Avatar
                                        color={deepOrange300}
                                        backgroundColor={orange200}
                                        size={15}
                                        style={styles.coinAv}
                                    >
                                    </Avatar>
                                </div>
                            </CardTitle>
                        </Card>

            )

        }
        else {
            return(
                <Card onClick={() => this.props.onClick(this.props.product)}>
                    <CardMedia>
                        <img src={this.props.product.img.hdUrl} />
                    </CardMedia>
                    <CardTitle title={this.props.product.name} subtitle={this.props.product.category} style={styles.cardTitle} >
                        <div>
                            <p style={styles.cardP}>{this.props.product.cost}</p>
                            <Avatar
                                color={deepOrange300}
                                backgroundColor={orange200}
                                size={15}
                                style={styles.coinAv}
                            >
                            </Avatar>
                        </div>
                    </CardTitle>
                </Card>
            );
        }
    }
}

class GridLandscape extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }



    render() {
        return(
            <GridList
                cellHeight={365}
                cols={4}
                style={styles.gridList}
                padding={20}
            >
                {this.props.products.map((tile) => (
                    <ProductCard
                        onClick={() => this.props.onClick(tile)}
                        product ={tile}
                        user ={this.props.user}
                    />
                ))}
            </GridList>
        );

    }
}

class Grid extends React.Component{



    constructor(props) {
        super(props);
        this.state = {
            products: [],
            user: [],
            open: false,
            progressHidden: true,
            prodClicked: [],
            prodHdUrl: '',
            openDrawer: false,
        };
    }

    componentDidMount() {
        var request = require('request');
        var lala = this;


        request({
            method: 'GET',
            url: 'https://aerolab-challenge.now.sh/products',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTIwODE4ZmYzNWEzYjAwNzk2N2FkNzIiLCJpYXQiOjE1MTIwNzk3NTl9.n4_9W867WTA9S01zIrhXHVOYFYVOs7ppbQnSo6j8e2U'
            }}, function (error, response, body) {
            var obj = JSON.parse(body);
            lala.setState({products: obj});
            console.log(obj[1]);
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
        });



        request({
            method: 'GET',
            url: 'https://aerolab-challenge.now.sh/user/me',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTIwODE4ZmYzNWEzYjAwNzk2N2FkNzIiLCJpYXQiOjE1MTIwNzk3NTl9.n4_9W867WTA9S01zIrhXHVOYFYVOs7ppbQnSo6j8e2U'
            }}, function (error, response, body) {
            var obj = JSON.parse(body);
            lala.setState({user: obj});
            lala.forceUpdate();
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
        });




    }

    handleCloseDrawer = () => this.setState({openDrawer: false});

    handleClick(i) {
        if (i === 0){
            var products = this.state.products;
            products.sort(function(a, b){return b.cost - a.cost})
            this.setState({products: products})
        }
        if (i === 1){
            var products = this.state.products;
            products.sort(function(a, b){return a.cost - b.cost})
            this.setState({products: products})
        }
        if (i===2){
            this.setState({openDrawer: !this.state.openDrawer});
        }
    }

    reedemProduct = () => {
        var request = require('request');
        var lala = this;




        request({
            method: 'POST',
            url: 'https://aerolab-challenge.now.sh/redeem',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTIwODE4ZmYzNWEzYjAwNzk2N2FkNzIiLCJpYXQiOjE1MTIwNzk3NTl9.n4_9W867WTA9S01zIrhXHVOYFYVOs7ppbQnSo6j8e2U'
            },
            body: "{  \"productId\": \"" + lala.state.prodClicked._id + "\"}"
        }, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);

            lala.state.user.points = lala.state.user.points - lala.state.prodClicked.cost;
            lala.setState({open: false});
        });


    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleClickCell(prod) {
        this.setState({prodClicked: prod, prodHdUrl: prod.img.hdUrl});

        this.handleOpen();

    }
    render() {
        var lala = this;

        const actions = [

            <RaisedButton onClick={this.reedemProduct} label="Redeem" primary={'true'} fullWidth={true}/>

        ];


        const GridListExampleSimple = () => (


            <div style={styles.root}>

                <MediaQuery minDeviceWidth={1224}>
                    <Nav
                        user={this.state.user}
                        onClick={(i) => lala.handleClick(i)}/>
                    <GridLandscape
                        products={this.state.products}
                        user={this.state.user}
                        onClick={(prod) => lala.handleClickCell(prod)}
                    />
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <img style={styles.imgDialog} src={lala.state.prodHdUrl}/>
                        <p style={styles.pDialogTitle}>{lala.state.prodClicked.name}</p>
                        <p style={styles.pDialogCat}>{lala.state.prodClicked.category}</p>
                        <p style={styles.cardP}>{lala.state.prodClicked.cost}</p>
                        <Avatar
                            color={deepOrange300}
                            backgroundColor={orange200}
                            size={15}
                            style={styles.coinAv}
                        >
                        </Avatar>

                    </Dialog>
                </MediaQuery>
                <MediaQuery minDeviceWidth={321} maxDeviceWidth={1223} >
                    <NavPortrait
                        user={this.state.user}
                        onClick={(i) => lala.handleClick(i)}/>
                    <GridPortrait
                        products={this.state.products}
                        user={this.state.user}
                        onClick={(prod) => lala.handleClickCell(prod)}
                    />
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <img style={styles.imgDialogPor} src={lala.state.prodHdUrl}/>
                        <p style={styles.pDialogTitle}>{lala.state.prodClicked.name}</p>
                        <p style={styles.pDialogCat}>{lala.state.prodClicked.category}</p>
                        <p style={styles.cardP}>{lala.state.prodClicked.cost}</p>
                        <Avatar
                            color={deepOrange300}
                            backgroundColor={orange200}
                            size={15}
                            style={styles.coinAv}
                        >
                        </Avatar>
                    </Dialog>
                    <Drawer
                        docked={false}
                        width={200}
                        containerStyle={styles.drawer}
                        open={this.state.openDrawer}
                        onRequestChange={(openDrawer) => this.setState({openDrawer})}
                    >
                        <AppBar title={this.state.user.name} style={styles.drawerAppBar} onLeftIconButtonClick={() => lala.handleClick(2)} />
                        <img src="https://aerolab.co/images/apple-touch-icon.png" style={styles.imgLogoDrawer}/>
                        <div style={styles.divPoitsAppBar}>
                            <p style={styles.pAppBar}>You have {this.state.user.points}</p>
                            <Avatar
                                color={deepOrange300}
                                backgroundColor={orange200}
                                size={15}
                                style={styles.coinAppBar}
                            />
                        </div>
                    </Drawer>
                </MediaQuery>
            </div>

        );


            return (
                <MuiThemeProvider>
                    <GridListExampleSimple/>
                </MuiThemeProvider>
            );



    }





}


ReactDOM.render(<Grid />, document.getElementById('root'));
registerServiceWorker();
