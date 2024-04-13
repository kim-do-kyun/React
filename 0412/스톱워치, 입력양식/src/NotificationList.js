import React, { Component } from 'react'
import Notification from './Notification'
const reservedNotifications = [
    {
        id : 1,
        message : "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id : 2,
        message : "점심식사 시간입니다.",
    },
    {
        id : 3,
        messagae : "이제 곧 수업이 시작됩니다.",
    },
];
var timer 
export default class NotificationList extends Component {
    constructor(props){
        super(props)
        this.state = {
            notifications:[],
        };
    }
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else{
                this.setState({notifications:[],});
                clearInterval(timer);
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (timer){
            clearInterval(timer);
        }
    }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification)=>{
            return <Notification
                key={notification.id}
                id={notification.id}
                message={notification.messagae}/>;
        })}
      </div>
    )
  }
}
