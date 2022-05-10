import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";


export const MainContent = () => {
    return (
        <Card style={styles.card}>
            <CardMedia component="img" height="510px" image = "./img/main.jpg"/>
            <div style={styles.overlay}>What're you buying?</div>
        </Card>
    );
}

const styles = {
    media: {
       height: 0,
       paddingTop: '56.25%' 
    },
    card: {
       position: 'relative',
       borderRadius: 0
    },
    overlay: {
       position: 'absolute',
       top: '200px',
       left: '320px',
       color: 'white',
       fontSize: '60px',
       textTransform: 'uppercase'
    }
 }