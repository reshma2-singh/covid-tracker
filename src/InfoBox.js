import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function InfoBox({title,cases,total}) {
    return (
        <div>
            <Card className="infoBox">
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                    <h2 className="infoBox__cases">{cases}</h2>
                    <Typography className="infoBox__total" >{total}Total</Typography>
                    
                </CardContent>
            </Card>
            
        </div>
    )
}

export default InfoBox
