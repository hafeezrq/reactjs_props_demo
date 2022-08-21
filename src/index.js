// Latest updates and changes, the way we developt React Components
// To create a Component and Show on the screen is five step process

// 1:- Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetails from './components/CommentDetails';
import { faker } from '@faker-js/faker';
import ApprovalCard from './components/ApprovalCard';

//  2:- Get a reference to the div with ID 'root'
const el = document.getElementById('root');

//  3:- Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//  4:- Create a Component
function App() {
  return (
    <div className=' ui container'>
      <h1 className='ui header'>World of ReactJS</h1>
      <h4 className='ui header'>
        You will see some example here developed using ReactJS and MUI
      </h4>
      <hr />
      <div className='ui container comments'>
        <ApprovalCard>
          <CommentDetails
            author='Sam'
            time='Monday at 9:30 AM'
            comment='A very nice blog!'
            src={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            author='Alex'
            time='Today at 3:00 AM'
            comment='True, we can think like that!'
            src={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            author='Jane'
            time='Yesterday at 12:00 PM'
            comment='I think you should do more'
            src={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
}
//  5:- Show the component on the screen
root.render(<App />);
