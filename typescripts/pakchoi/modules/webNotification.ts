namespace webapp.modules {

    export function startNotification() {
        setInterval(fetchNewMessage, 1000);
    }

    function fetchNewMessage() {
        if (Notification.permission == "granted") {
            $ts.get("@api:getNewMsg", function (result: IMsg<activityMessage>) {
                if (result.code == 0) {
                    let msg = <activityMessage>result.info;
                    let notification = new Notification(msg.title, {
                        body: msg.content,
                        icon: msg.iconImage || "/favicon.png"
                    });

                    notification.onclick = function () {
                        notification.close();

                        // jump to link if contains link value in message
                        // data
                        if (!Strings.Empty(msg.link)) {
                            $goto(msg.link);
                        }
                    };
                }
            });
        }
    }

    interface activityMessage {
        title: string;
        content: string;
        iconImage: string;
        create_time: string;
        link: string;
        id: string;
    }
}