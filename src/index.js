import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 12:11" 
                    commentText="Looks good!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
          
            <ApprovalCard>
                <CommentDetail 
                    author="Jake" 
                    timeAgo="Today at 13:55" 
                    commentText="Much more easier!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
           
            <ApprovalCard>
                <CommentDetail 
                    author="Mary" 
                    timeAgo="Today at 14:44" 
                    commentText="Awesome!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));