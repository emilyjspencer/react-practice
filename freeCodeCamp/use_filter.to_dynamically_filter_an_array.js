// Use Array.filter() to Dynamically Filter an Array 


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      }
    }
    render() {
      const usersOnline = this.state.users.filter(user => user.online)
  
      const renderOnline = usersOnline.map((user, id) => {
        return <li key={id}>{user.username}</li>
      })
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
             {renderOnline}
           </ul>
         </div>
      );
    }
  };

  // MyComponent components has state containing an array of users. Each user has a username and states whether the user is 
  // online or not
  // The filter() method is called to filter out all those who aren't online and instead return an array of those who are online.
  // We then map over this new array of online users and return an li element for each user - rendering their username 


