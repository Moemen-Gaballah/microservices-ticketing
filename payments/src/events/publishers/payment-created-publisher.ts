import {PaymentCreatedEvent, Publisher, Subjects} from "@mgticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}