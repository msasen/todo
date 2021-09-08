import React,{useState} from 'react'
import TodoDataConsumer from "../contextApi/TodoDataContext";
import Category  from './Category'
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    height:'53px',
    // backgroundColor:"rgba(12 15 25 / 20%)",
    '&.Mui-disabled': {
      borderRadius:'50%',
      border: 0,
    },
    '&.Mui-selected': {
      
      backgroundColor:"rgba(12 15 25 / 70%)",
    },
    '&:hover': {
      // backgroundColor:"rgba(12 15 25 / 40%)",
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CategoryList() {
  const [view, setView] = React.useState('list');
  const [count, setCount] = useState(1);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

    
  function set(params) {
    setCount(0)
    //console.log("çalıştım ve gönderdim sıfırı")
  }
  return (
    <div>
      <TodoDataConsumer>
          {(TodoDataValue) => (
             <div className="scrollBar">            
                      {
                        TodoDataValue.todo.map((tag,i) => {

                          return(
                            
                            <StyledToggleButtonGroup
                            key={i}
                            orientation="vertical"
                            value={view}
                            exclusive
                            onChange={handleChange}
                            sx={{
                              width:'220px',
                              // height:'100px',
                              // borderRadius:'20px'
                            }}>
                
                
                                <ToggleButton   style={{borderRadius: '18px', marginBottom: '13px', marginLeft:'0px'}} 
                                key={i} value={i} aria-label="list">
        
                                  <div   onClick={set} >
                                    
                                      <Category
                                          count={count}
                                          logoName='Cancel'
                                          key={i}
                                          isNull={tag.isNull}
                                          name= {tag.name}
                                          id={tag.id}
                                          />
                                    </div>
                                </ToggleButton>
                        </StyledToggleButtonGroup>
                            )
                            
                          }
                          )
                        }

              </div>
          )
      }
      </TodoDataConsumer>
    </div>
  )
}