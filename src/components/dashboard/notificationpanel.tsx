'use client';

import NotificationItem
from './notificationitem';

import {
Notification
}
from '@/src/hooks/usenotifications';

type Props = {

notifications:
Notification[];

markAllRead:
()=>void;

};

export default function NotificationPanel({

notifications,

markAllRead

}:Props){

return(

<div
className="
absolute
right-0
top-12
z-50
w-80
rounded-xl
bg-white
shadow-xl
dark:bg-slate-800
"
>

<div
className="
flex
items-center
justify-between
border-b
p-4
"
>

<h3>

Notifications

</h3>

<button

onClick={markAllRead}

className="
text-sm
text-blue-600
"

>

Mark all read

</button>

</div>

<div>

{

notifications.map(item=>(

<NotificationItem

key={item.id}

item={item}

/>

))

}

</div>

</div>

);

}