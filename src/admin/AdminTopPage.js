import Dashboard from '../admin/components/dashboard/Dashboard'
import Box from '@mui/material/Box';
import {Button} from '@mui/material'
import Grid from '@mui/material/Grid';

import{useState} from 'react'


export default function AdminTopPage() {
  const [image,setImage] = useState([]);

  const onFileChange = (e) =>{
    const files = e.target.files
    if (files.length > 0) {
        let file = files[0]
        let reader = new FileReader()
        reader.onload = (e) => {
            setImage( e.target.result )
        };
        reader.readAsDataURL(file)
    } else {
        setImage(  null )
    }
}

let preview = ''

if (image != null) {
    preview = (
      <Grid item xs={12}>
        <Box sx={{width:"100%", height:500}}> 
          <img style={{width:"100%", height:"100%",objectFit:"cover"}} src={image}/> 
        </Box>
      </Grid>
    )
}

  return (
    <Dashboard>
      <Grid item xs={12} >
        {preview}
        <Grid container spacing={2}>
          <Grid item >
            <label htmlFor={'upload'}>
              <Button 
                variant='contained' 
                component="span">
                参照
              </Button>
                <input 
                id={'upload'}
                type="file"
                accept='image/*,png,jpeg,jpg'
                style={{display:"none"}}
                onChange={
                  (e) => {
                    onFileChange(e)
                  }
                }/>
            </label>
          </Grid>
          <Grid item >
            <Button 
                variant='contained' 
                component="span">
                保存
            </Button>  
          </Grid>
        </Grid>
      </Grid>
    </Dashboard>
  );
}