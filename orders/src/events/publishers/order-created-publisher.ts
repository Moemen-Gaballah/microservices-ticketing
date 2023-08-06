import {OrderCreatedEvent, Publisher, Subjects} from '@mgticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}