import {Listener, OrderCreatedEvent, Subjects} from "@mgticketing/common";
import {queueGroupName} from "./queue-group-name";
import {Message} from "node-nats-streaming";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName;

    onMessage(data: OrderCreatedEvent["data"], msg: Message) {

    }


}